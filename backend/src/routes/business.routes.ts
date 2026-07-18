import { Router } from "express";
import { validate } from "../middlewares/validate.middleware";
import { RegisterBusinessSchema } from "../validators/business.validator";
import { registerBusinesses } from "../controllers/business.controller";

const router = Router();


/**
 * @openapi
 * /business/register:
 *   post:
 *     summary: Register a business
 *     tags: [Business]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               phone:
 *                 type: string
 *               location:
 *                 type: string
 *               staff_no:
 *                 type: number
 *               description:
 *                 type: string
 *               logo:
 *                 type: string
 *                 format: uri
 *             required:
 *               - name
 *               - email
 *               - phone
 *               - staff_no
 *                  
 *     responses:
 *       201:
 *         description: Business registered successfully
 */
router.post('/register', validate(RegisterBusinessSchema), registerBusinesses);


export default router;