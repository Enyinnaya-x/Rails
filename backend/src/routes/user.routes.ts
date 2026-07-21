import { Router } from "express";
import { login, register } from "../controllers/auth.controller";
import { validate } from "../middlewares/validate.middleware";
import { loginUserSchema, registerUserSchema } from "../validators/auth.validator";
import { authLimiter } from "../middlewares/rateLimit.middleware";

const router = Router()

/**
 * @openapi
 * /users/register:
 *   post:
 *     summary: Register a User (HR, Admin, Owner)
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               business_id:
 *                 type: number
 *               full_name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               phone:
 *                 type: string
 *               position:
 *                 type: string
 *               role:
 *                 type: number
 *               password:
 *                 type: string
 *                 minLength: 8
 *               confirm_password:
 *                 type: string
 *                 minLength: 8
 *             required:
 *               - business_id
 *               - full_name
 *               - email
 *               - phone
 *               - position
 *               - role
 *               - password
 *               - confirm_password
 *                  
 *     responses:
 *       201:
 *         description: Account successfully created
 */
router.post('/register', validate(registerUserSchema), authLimiter, register);

/**
 * @openapi
 * /users/login:
 *   post:
 *     summary: Login a User (HR, Admin, Owner)
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 minLength: 8
 *             required:
 *               - email
 *               - password
 *                  
 *     responses:
 *       201:
 *         description: Account successfully created
 */
router.post('/login', validate(loginUserSchema), authLimiter, login);


export default router;