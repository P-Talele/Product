import { ProductModel } from '../../models/product';
import { Role } from '../../config';
import { CloudinaryService } from './../../services/cloudinary'


export class SellerService {
    private productModel: typeof ProductModel;
    private cloudinaryService = new CloudinaryService

    constructor() {
        this.productModel = ProductModel;
        this.cloudinaryService = new CloudinaryService
    }


    async AddProduct(Product_Name: string, Product_Description: string, Brand_Name: string, Detail: any, Image: any, Price: number, sellerId: any
    ) {


        let imageUrl: string | null = null;
        if (Image) {
            const result = await this.cloudinaryService.uploadFile(Image)
            imageUrl = result.secure_url;
        }

        const Product = await this.productModel.create({
            SellerId: sellerId.id,
            Product_Name,
            Product_Description,
            Brand_Name,
            Detail,
            Image: imageUrl,
            Price,
        });

        return Product;

    }
    async ProductList(page: any, limit: any, sellerId: any) {

        const Page = Number(page) || 1;
        const Limit = Number(limit) || 10;
        const skip = (Page - 1) * Limit;

        const [data, total] = await Promise.all([
            this.productModel
                .find({ SellerId: sellerId.id })
                .select({ __v: 0, SellerId: 0 })
                .skip(skip)
                .limit(Limit)
                .lean(),

            this.productModel.countDocuments({ SellerId: sellerId.id })
        ]);

        return { total, data };
    }


    async ProductDelete(productId: any) {
        const ishas = await this.productModel.findOne({ _id: productId });

        if (!ishas) {
            const error: any = new Error("Product not found");
            error.status = 404;
            throw error;
        }


        const data = await this.productModel.findOneAndDelete({ _id: productId });
    }

}