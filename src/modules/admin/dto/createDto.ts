import { IsEmail, IsNotEmpty, IsString, MinLength, IsMongoId, IsArray, Matches } from "class-validator";
import { validate } from "class-validator";

export class CreateSellerDTO {
    @IsNotEmpty({ message: "Name is required" })
    name!: any;

    @IsNotEmpty({ message: "Email is required" })
    email!: any;
    @IsNotEmpty({ message: "Password is required" })
    password!: any;

    @IsNotEmpty({ message: "Mobile_No is required" })
    mobile_No!: any;

    @IsNotEmpty({ message: "Country is required" })
    country!: any;

    @IsNotEmpty({ message: "State is required" })
    state!: any;
    @IsNotEmpty({ message: "skills is required" })
    skills!: any;
}


