import {
    IsString,
    IsNotEmpty,
    IsNumber,
} from 'class-validator';



export class AddProductDto {

    @IsNotEmpty({ message: 'Product Name is required.' })
    Product_Name!: any;

    @IsNotEmpty({ message: 'Product Description is required.' })
    Product_Description!: any;

    @IsNotEmpty({ message: 'Brand Name is required.' })
    Brand_Name!: any;


    @IsNotEmpty({ message: 'Detail Name is required.' })
    Detail!: any;

    @IsNotEmpty({ message: 'Price is required.' })
    Price!: any;
}