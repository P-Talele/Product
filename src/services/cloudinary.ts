import { v2 as cloudinary, UploadApiResponse } from "cloudinary";
import { config } from "../config";


cloudinary.config({
  cloud_name: config.CLOUD_NAME,
  api_key: config.API_Key,
  api_secret: config.API_SECREAT,
});

export class CloudinaryService {
  private Profile: string;

  constructor(Profile: string = "Profile") {
    this.Profile = Profile;
  }

  public async uploadFile(file: Express.Multer.File): Promise<UploadApiResponse> {
    return new Promise((resolve, reject) => {

      const base64 = `data:${file.mimetype};base64,${file.buffer.toString("base64")}`;

      cloudinary.uploader.upload(
        base64,
        { Profile: this.Profile },
        (err, result) => {
          if (err) reject(err);
          else resolve(result as UploadApiResponse);
        }
      );
    });
  }

}
