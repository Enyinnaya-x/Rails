import { LoginUserRequest, RegisterUserRequest } from "../validators/auth.validator";
import { findUserByEmail } from "../repositories/user.repository";
import { AppError } from "../utils/AppError";
import { comparePassword, hashPassword } from "../utils/hash";
import { createUser } from "../repositories/user.repository";
import { generateRefreshToken, generateToken } from "../utils/jwt";
import { storeRefreshToken } from "../repositories/refreshToken.repository";
import { env } from "../config/env";
import { normalizeNigerianPhone } from "../utils/normalizePhone";
import { publishUserRegistered } from "../events/publishers/userEvent.publisher";

// register User like admins or super_admins 
export async function registerUser(data: RegisterUserRequest){
    //check if user has already been registered
    const existingUser = await findUserByEmail(data.email);

    if(existingUser){
        throw new AppError('This admin already exists', 409);
    }

    const userData = {
        ...data,
        phone: normalizeNigerianPhone(data.phone),
        password: await hashPassword(data.password)
    }

    //register user
    await createUser(userData);

    //trigger an event to send a welcome email
    await publishUserRegistered(userData);

}

// login user i.e admins and super_admins 
export async function loginUser(data: LoginUserRequest){
    //check if user exists
    const existingUser = await findUserByEmail(data.email);

    if(!existingUser){
        throw new AppError('Invalid credentials', 401);
    }


    const isMatch = await comparePassword(data.password, existingUser.password);

    //check if the passwords match
    if(!isMatch){
         throw new AppError('Invalid credentials', 401);
    }

    const accessToken = generateToken({ userId: existingUser.id });
    const refreshToken = generateRefreshToken();
    const REFRESH_TOKEN_EXPIRY_DAYS = Number(env.REFRESH_TOKEN_EXPIRY_DAYS);
    const expiresAt = new Date(Date.now() + REFRESH_TOKEN_EXPIRY_DAYS * 24 * 60 * 60 * 1000); // X days from now

    //store refresh token in the db
      await storeRefreshToken({
        'user_id': existingUser.id,
        'token': refreshToken,
        'expires_at': expiresAt
      });

    return { accessToken: accessToken, refreshToken: refreshToken  };
}