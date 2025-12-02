import { Request, Response } from "express";
import { AuthService } from "./service";
import { message } from "./../../helper/messages";


export class AuthController {
    private authService: AuthService;

    constructor() {
        this.authService = new AuthService();
    }



    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;

            const result = await this.authService.login(email, password);

            return res.json({
                code: 200,
                success: true,
                message: message.auth.login,
                data: result
            });
        } catch (error: any) {
            return res.status(400).json({
                code: 400,
                success: false,
                message: error.message
            });
        }
    }
}
