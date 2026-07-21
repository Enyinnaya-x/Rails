import { User } from '../models/user.model.js';
import { query } from '../utils/db.js';


export async function findUserByEmail(email: string){
    const { rows } = await query<User>(
        `SELECT * FROM users WHERE email = $1`,
        [email]
    );

    return rows[0];
}

export async function createUser(
    data: Pick<User, 'business_id' | 'full_name' | 'email' | 'phone' | 'password' | 'position' | 'role' >
)
{
    const { rows } = await query<User>(
        `INSERT INTO users(business_id, full_name, email, phone, password, position, role)
        VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
        [data.business_id, data.full_name, data.email, data.phone, data.password, data.position, data.role]
    );

}