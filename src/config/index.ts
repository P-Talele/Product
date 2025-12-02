
import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.PORT || 8000,
  mongoUri: process.env.MONGO_URI || "",
  jwtSecret: process.env.JWT_SECRET || 'rrerenefewefefr4r43r4r',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',
  aesKey: process.env.AES_KEY || 'r37r3ec3e3e3ee3er3r3rrrrr',
  CLOUD_NAME: process.env.Cloud_name,
  API_Key: process.env.API_key,
  API_SECREAT: process.env.API_secret

};



export enum Role {
  Admin = 'Admin',
  Seller = 'Seller'
}

export const Model = {
  Seller: "seller",
  Country: "country",
  State: 'state'
}

