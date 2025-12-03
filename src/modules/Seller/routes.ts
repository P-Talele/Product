
import { Router } from 'express';
import { SellerController } from './controller';
import { authMiddleware } from '../../middlewares/auth.middleware';
import { uploadimage } from '../../middlewares/multer.middleware'
import { validateDTO } from './../../middlewares/validate.middleware'
import { AddProductDto } from './dto/productDTO'


const router = Router();
const controller = new SellerController();


router.post('/add-product', authMiddleware, uploadimage, validateDTO(AddProductDto), (req, res) => controller.AddProduct(req, res));
router.get('/product-list', authMiddleware, (req, res) => controller.ProductList(req, res));
router.delete('/product-delete', authMiddleware, (req, res) => controller.ProductDelete(req, res));


export default router;
