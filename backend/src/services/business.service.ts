import { findBusinessByEmail, createBusiness } from "../repositories/business.repository";
import { RegisterBusinessRequest } from "../validators/business.validator";
import { AppError } from "../utils/AppError";
import { normalizeNigerianPhone } from "../utils/normalizePhone";


//register business
export async function registerBusiness(data: RegisterBusinessRequest){
    //check if business is already registered
    const existingBusiness = await findBusinessByEmail(data.email);

    if(existingBusiness){
        throw new AppError('This business is already registered.', 409);
    }

    const businessData = {
        ...data,
        phone: normalizeNigerianPhone(data.phone)
    };

    return await createBusiness(businessData);
    
}
