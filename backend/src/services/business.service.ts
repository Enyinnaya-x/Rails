import { findBusinessByEmail, createBusiness } from "../repositories/business.repository";
import { RegisterBusinessRequest } from "../validators/business.validator";
import { AppError } from "../utils/AppError";
import { normalizeNigerianPhone } from "../utils/normalizePhone";
import { publishBusinessRegistered } from "../events/publishers/businessEvent.publisher";

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


    //register business in db
     await createBusiness(businessData);


     //send out welcome email
     return await publishBusinessRegistered(businessData);

    
}
