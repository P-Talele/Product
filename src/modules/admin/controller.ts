import { Request, Response } from "express";
import { SellerService } from "./service";
import { message } from "../../helper/messages";


export class SellerController {
    private service: SellerService;

    constructor() {
        this.service = new SellerService();
    }

    async CreateSeller(req: Request, res: Response) {
        try {

            const { name, email, password, mobile_No, country, state, skills } = req.body
            const profile_src = req.file

            console.log("skills", typeof skills)

            if (!profile_src) {
                return res.status(400).json({ error: "profile_src is required" });
            }
            const data = await this.service.createSeller(name, email, profile_src, password, mobile_No, country, state, skills);

            return res.json({
                code: 200,
                success: true,
                message: message.seller.craete,
                data
            });
        } catch (error: any) {

            console.log("Erorr", error)
            return res.status(400).json({
                code: 400,
                success: false,
                message: error.message
            });
        }
    }


    async SellerList(req: Request, res: Response) {
        try {
            const page = Number(req.query.page || 1);
            const limit = Number(req.query.limit || 20);

            const data = await this.service.sellerList(page, limit);

            return res.json({
                code: 200,
                success: true,
                data
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
