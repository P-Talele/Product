
import { Router } from 'express';
import { SellerController } from './controller';
import { authMiddleware } from '../../middlewares/auth.middleware';
import { requireRole } from '../../middlewares/role.middleware';
import { Role } from '../../config';
import { uploadFile } from '../../middlewares/multer.middleware'
import { validateDTO } from './../../middlewares/validate.middleware'
import { CreateSellerDTO } from './dto/createDto'



const router = Router();
const controller = new SellerController();


// authMiddleware
//requireRole(Role.Admin), 
//

router.post('/seller', authMiddleware, requireRole(Role.Admin), uploadFile, validateDTO(CreateSellerDTO), (req, res) => controller.CreateSeller(req, res));
router.get('/seller', authMiddleware, requireRole(Role.Admin), (req, res) => controller.SellerList(req, res));



export default router;
