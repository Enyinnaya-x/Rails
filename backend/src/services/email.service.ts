import { env } from "../config/env";
import { Business } from "../models/business.model";
import { User } from "../models/user.model";
import { SendByte } from '@sendbyte/node';
import { SendByteError } from "@sendbyte/node";


//send user i.e admin welcome email
export async function sendWelcomeEmail(user: User)
{
    const sendbyte = new SendByte(env.SEND_BYTE_LIVE_API);

            
        try {
        const { id } = await sendbyte.emails.send({
            from: 'Rails <no-reply@joinrails.live>',
            to: user.email,
            subject: 'Welcome to Rails',
            template_id: env.WELCOME_EMAIL_TEMPLATE_ID,
            variables: {
                name: user.full_name
            },
            idempotency_key: `welcome-${user.id}`,
        });

        console.log('Email queued with ID:', id);
        } catch (err) {
        if (err instanceof SendByteError) {
            console.error(err.code, err.message, err.docsUrl);
            }
        }

}


// send business welcome email 
export async function sendBusinessWelcomeEmail(business: Business)
{
     const sendbyte = new SendByte(env.SEND_BYTE_LIVE_API);

            
        try {
        const { id } = await sendbyte.emails.send({
            from: 'Rails <no-reply@joinrails.live>',
            to: business.email,
            subject: 'Welcome to Rails',
            template_id: env.WELCOME_EMAIL_TEMPLATE_ID,
            variables: {
                name: business.name
            },
            idempotency_key: `welcome-${business.id}`,
        });

        console.log('Email queued with ID:', id);
        } catch (err) {
        if (err instanceof SendByteError) {
            console.error(err.code, err.message, err.docsUrl);
            }
        }
}