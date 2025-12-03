
import { Schema, model, Document, Types } from 'mongoose';
import { Role, Model } from '../config';


export interface Product extends Document {
    Product_Name: string,
    SellerId: Types.ObjectId,
    Product_Description: string,
    Brand_Name: string
    Detail: string,
    Image: string,
    Price: number
    createdAt: Date;
    updatedAt: Date;
}
const ProductSchema = new Schema<Product>({
    SellerId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    Product_Name: {
        type: String,
        required: true
    },
    Product_Description: {
        type: String,
        required: true,
    },
    Brand_Name: {
        type: String,
        required: true
    },
    Detail: {
        type: String,
        required: true
    },
    Image: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date, default: () => new Date()
    },
    updatedAt: {
        type: Date, default: () => new Date()
    }
});

export const ProductModel = model<Product>(Model.Product, ProductSchema);