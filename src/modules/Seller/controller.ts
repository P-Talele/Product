import { Request, Response } from "express";
import { SellerService } from "./service";
import { message } from "../../helper/messages";
import { errorHandler } from "../../middlewares/error.middleware";

export class SellerController {
    private service: SellerService;

    constructor() {
        this.service = new SellerService();
    }

    async AddProduct(req: Request, res: Response) {
        try {
            const { Product_Name, Product_Description, Brand_Name, Detail, Price } = req.body

            const Image = req.file
            if (!Image) throw new Error("File is Required");


            const data = await this.service.AddProduct(Product_Name, Product_Description, Brand_Name, Detail, Image, Price, req.user);

            return res.json({
                code: 200,
                success: true,
                data
            });
        } catch (error: any) {

            console.log("error", error)
            return res.status(400).json({
                code: 400,
                success: false,
                message: error.message
            });
        }
    }


    async ProductList(req: Request, res: Response) {
        try {
            const { page, limit } = req.query



            const data = await this.service.ProductList(page, limit, req.user);

            return res.json({
                code: 200,
                success: true,
                data
            });
        } catch (error: any) {

            console.log("error", error)
            return res.status(400).json({
                code: 400,
                success: false,
                message: error.message
            });
        }
    }


    async ProductDelete(req: Request, res: Response) {
        try {

            const { _id } = req.body

            if(!_id) throw new Error("ID is requred")

            const data = await this.service.ProductDelete(_id);

            return res.json({
                code: 200,
                message: "Product han been deleled succesfully.",
                success: true,
                data
            });
        } catch (error: any) {

            console.log("error", error)
            return res.status(400).json({
                code: 400,
                success: false,
                message: error.message
            });
        }
    }




}
