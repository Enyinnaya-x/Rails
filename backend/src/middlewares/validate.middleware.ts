import { NextFunction, Request, Response } from "express";
import { success, ZodSchema } from "zod";
import { AppError } from "../utils/AppError";

export function validate(schema: ZodSchema){
    return (req: Request, res: Response, next: NextFunction) => {
        try{

        }catch(err){
            throw new AppError('Bad request', 401);
        }
    }
}