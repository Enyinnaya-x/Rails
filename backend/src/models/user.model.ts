export interface User{
    id: number;
    business_id: number;
    full_name: string;
    email: string;
    password: string;
    position: string;
    role: 'admin' | 'super_admin';
    created_at: Date;
    updated_at: Date

}