import { NextFunction, Request, Response } from "express";
import { registerUser } from "../services/auth.service";

export async function register(req: Request, res: Response, next: NextFunction)
{
    try{
         const data = await registerUser(req.body);
         res.status(201).json({ success: true, message: 'Account successfully created' });


    }catch(err){
        next(err)
    }
}

export async function login(req: Request, res: Response, next: NextFunction)
{
    try{
        
    }catch(err){
        next(err)
    }
}