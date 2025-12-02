import { IsEmail, IsNotEmpty, IsString, MinLength, IsMongoId, IsArray, Matches } from "class-validator";
import { validate } from "class-validator";

export class CreateSellerDTO {
    @IsNotEmpty({ message: "Name is required" })
    @IsString({ message: "Name must be a string" })
    name!: string;

    @IsEmail({}, { message: "Invalid email format" })
    email!: string;

    @IsNotEmpty()
    @MinLength(6, { message: "Password must be at least 6 characters" })
    password!: string;

    @IsNotEmpty()
    @Matches(/^\d{10,15}$/, { message: "Mobile number must be 10-15 digits" })
    mobile_No!: string;

    @IsString({ message: "Country must be a string" })
    country!: string;

    @IsString({ message: "State must be a string" })
    state!: string;

    @IsString({ message: "Skills must be." })
    skills!: string;
}


