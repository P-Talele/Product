import bcrypt from 'bcryptjs'
import { SellerModel } from '../../models/Seller';
import { Role } from '../../config';
import { CloudinaryService } from './../../services/cloudinary'


export class SellerService {
    private sellerModel: typeof SellerModel;
    private bcrypt: typeof bcrypt;
    private cloudinaryService = new CloudinaryService

    constructor() {
        this.sellerModel = SellerModel;
        this.bcrypt = bcrypt
        this.cloudinaryService = new CloudinaryService
    }

    async createSeller(name: any, email: any, profile_src: any, password: any, mobile_No: any, country: any, state: any, skills: any) {

        const hashedPassword = await bcrypt.hash(password, 10);

        let imageUrl: string | null = null;
        if (profile_src) {
            const result = await this.cloudinaryService.uploadFile(profile_src)
            imageUrl = result.secure_url;
        }  

        const Seller = await this.sellerModel.create({
            name,
            email,
            profile_src: imageUrl,
            password: hashedPassword,
            mobile_No,
            country,
            state,
            skills,
        });
        return Seller;
    }

    async sellerList(page: number, limit: number) {
        const skip = (page - 1) * limit;

        const [data, total] = await Promise.all([
            this.sellerModel
                .find()
                .select({ password: 0, __v: 0 })
                .skip(skip)
                .limit(limit),
            this.sellerModel.countDocuments()
        ]);

        return { total, page, limit, data };
    }




}
