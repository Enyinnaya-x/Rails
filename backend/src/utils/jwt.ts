import jwt, { type SignOptions } from 'jsonwebtoken';
import { env } from '../config/env';
import crypto from 'crypto';

interface JwtPayLoad{
    userId: number;
}

export function generateToken(payload: JwtPayLoad): string
{
    const options: SignOptions = {
        expiresIn: env.JWT_EXPIRES_IN as NonNullable<SignOptions['expiresIn']>
    };
    return jwt.sign(payload, env.JWT_SECRET, options);
}

export function generateRefreshToken(){
    return crypto.randomBytes(40).toString('hex');
}

export function verifyToken(token: string): JwtPayLoad
{
    return jwt.verify(token, env.JWT_SECRET) as JwtPayLoad;
}