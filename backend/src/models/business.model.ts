export interface Business{
    id: string;
    name: string;
    email: string;
    location?: string;
    phone: string;
    staff_no: number;
    logo?: string;
    description?: string;
    created_at: Date;
    updated_at: Date
}