import z from "zod";

export const RegisterBusinessSchema = z.object({
    name: z.string(),
    email: z.email(),
    location: z.string().optional(),
    phone: z.string().min(10).max(15),
    staff_no: z.number(),
    logo: z.url().optional(),
    description: z.string().optional()
})

export type RegisterBusinessRequest = z.infer<typeof RegisterBusinessSchema>;