import { z } from 'zod';

export const registerUserSchema = z.object({
    business_id: z.number(),
    full_name: z.string(),
    email: z.email(),
    phone: z.string().min(10).max(15),
    position: z.string(),
    role: z.enum(['admin', 'super_admin']).default('admin'),
    password: z.string().min(8).max(100),
    confirm_password: z.string().min(8).max(100),
}).refine((data) => data.password === data.confirm_password, {
    message: 'Passwords do not match',
    path: ['confirm_password']
});

export const loginUserSchema = z.object({
    email: z.email(),
    password: z.string().min(8)
})

export const RegisterBusinessSchema = z.object({
    name: z.string(),
    email: z.email(),
    location: z.string().optional(),
    phone: z.string().min(10).max(15),
    staff_no: z.number(),
    logo: z.url().optional(),
    description: z.string().optional()
})

export type RegisterUserRequest = z.infer<typeof registerUserSchema>;
export type LoginUserRequest = z.infer<typeof loginUserSchema>;
export type RegisterBusinessRequest = z.infer<typeof RegisterBusinessSchema>;