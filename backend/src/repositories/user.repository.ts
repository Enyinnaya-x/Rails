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
    data: Pick<User, 'business_id' | 'full_name' | 'email' | 'password' | 'position' | 'role' >
)
{

}