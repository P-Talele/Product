
import { Schema, model, Document, Types } from 'mongoose';
import { Role, Model } from '../config';
import { message } from '../helper/messages';


export interface Seller extends Document {
    name: string;
    email: string;
    profile_src: string,
    password: string;
    role: Role.Admin | Role.Seller;
    mobile_No: number,
    country: string
    state: string,
    skills: [String],
    createdAt: Date;
    updatedAt: Date;
}
const sellerSchema = new Schema<Seller>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    profile_src: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: [Role.Admin, Role.Seller],
        default: Role.Seller
    },
    mobile_No: {
        type: Number,
        required: true,
        unique: true,
    },
    country: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    skills: {
        type: [String],
        required: true,
    },
    createdAt: {
        type: Date, default: () => new Date()
    },
    updatedAt: {
        type: Date, default: () => new Date()
    }
});

sellerSchema.pre("save", async function (next) {
    const seller = this;

    const emailExists = await SellerModel.findOne({ email: seller.email });
    const mobileIExists = await SellerModel.findOne({ mobile_No: seller.mobile_No });

    if (emailExists) {
        const error = new Error(message.error.email);
        return next(error);
    }
    if (mobileIExists) {
        const error = new Error(message.error.mobile);
        return next(error);
    }
    next();
});


export const SellerModel = model<Seller>(Model.Seller, sellerSchema);