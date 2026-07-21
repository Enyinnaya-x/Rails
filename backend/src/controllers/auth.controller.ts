import { NextFunction, Request, Response } from "express";
import { loginUser, registerUser } from "../services/auth.service";

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
        const data  = await loginUser(req.body);
        res.status(200).json({ success: true, data });
    }catch(err){
        next(err)
    }
}