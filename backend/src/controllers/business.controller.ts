import { NextFunction, Request, Response } from "express";
import { registerBusiness } from "../services/business.service";

export async function registerBusinesses(req: Request, res: Response, next: NextFunction)
{
    try{
        const data = await registerBusiness(req.body);
        res.status(201).json({ success: true, message: 'Business registered successfully' });
    }catch(err){
        next(err)
    }
}