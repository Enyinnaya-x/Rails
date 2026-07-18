import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt"; 

export async function authenticate(req: Request, res: Response, next: NextFunction)
{
    const authHeader = req.headers.authorization!;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        res.status(401).json({ success: false, message: 'Missing or invalid token' });
    }

    const token = authHeader.split(' ')[1];

    if(!token){
        res.json(401).json({ success: false, message: 'Invalid token format' });
    }

    try{
        const decoded = verifyToken(token);
        req.userId = decoded.userId;
        next()
    }catch(err){
        
        return res.status(401).json({ success: false, message: 'Invalid or expired token' });
    }   
}