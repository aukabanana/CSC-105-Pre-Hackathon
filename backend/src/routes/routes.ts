import { Router } from 'express';
import notificationRouter from '../modules/notification/routers/notification.router.js';
import electricRouter from '../modules/electric-charge/routers/electric-charge.router.js';

const router = Router();

router.use("/electronics", electricRouter);
router.use('/notifications', notificationRouter);

export default router;