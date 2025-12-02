
import { Router } from 'express';
import { AuthController } from './controller';
import { validateDTO } from './../../middlewares/validate.middleware';
import { LoginDTO } from './dto/login.dto';
const router = Router();

const controller = new AuthController();


router.post('/login', validateDTO(LoginDTO), (req, res) => controller.login(req, res));


export default router;