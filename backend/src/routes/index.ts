import { Router } from "express";
import userRoutes from './user.routes';
import businessRoutes from './business.routes';

const router = Router();


router.use('/users', userRoutes);
router.use('/business', businessRoutes);


export default router;