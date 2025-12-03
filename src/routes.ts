import express from 'express';
const route = express.Router();

import authRoutes from './modules/auth/routes';
import SellerEoute from './modules//Seller/routes'
import adminRoutes from './modules/admin/routes'


route.use('/auth', authRoutes);
route.use('/admin', adminRoutes);
route.use('/seller', SellerEoute)

export default route;
