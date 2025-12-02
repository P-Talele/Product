import bcrypt from "bcryptjs";
import { SellerModel } from "../../models/Seller";
import { signJwt } from "../../utils/jwt";
import { message } from "../../helper/messages";

export class AuthService {
    private sellerModel: typeof SellerModel;
    private bcrypt: typeof bcrypt;

    constructor() {
        this.sellerModel = SellerModel;
        this.bcrypt = bcrypt;
    }


    async login(email: string, password: string) {
        const user = await this.sellerModel.findOne({ email });
        if (!user) throw { status: 400, message: message.auth.Invalid_credentials };

        const ok = await this.bcrypt.compare(password, user.password);
        if (!ok) throw { status: 400, message: message.auth.Invalid_credentials };

        const token = signJwt({
            sub: user._id.toString(),
            role: user.role,
        });

        return {
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        };
    }
}
