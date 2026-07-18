import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";
import { AppError } from "../utils/AppError";

export function validate(schema: ZodSchema) {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = schema.safeParse(req.body);

            if (!result.success) {
                return next(new AppError('Validation failed', 400));
            }

            req.body = result.data;
            return next();
        } catch (err) {
            return next(new AppError('Bad request', 400));
        }
    };
}