import { Request } from "express";
import { Role } from "../config";

declare global {
  namespace Express {
    interface UserPayload {
      id: string;
      role: Role.Admin | Role.Seller;
    }

    interface Request {
      user?: UserPayload;
    }
  }
}

declare namespace Express {
  interface UserPayload {
    id: string;
    role: Role.Admin | Role.Seller;
  }

  interface Request {
    user?: UserPayload;
  }
}


export { };