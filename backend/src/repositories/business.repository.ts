import { Business } from "../models/business.model";
import { query } from '../utils/db';

export async function findBusinessByEmail(email: string){
    const { rows } = await query<Business>(
        `SELECT * FROM businesses WHERE email = $1`,
        [email]
    );

    return rows[0];
}

export async function createBusiness(
    data: Pick<Business, 'name' | 'email' | 'phone' | 'staff_no' | 'location' | 'logo' | 'description'>
){
    const { rows } = await query<Business>(
        `INSERT INTO businesses(name, email, phone, staff_no, location, logo, description)
        VALUES($1, $2, $3, $4, $5, $6, $7)`,
        [data.name, data.email, data.phone, data.staff_no, data.location, data.logo, data.description]
    );
}