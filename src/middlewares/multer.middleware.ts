import multer, { FileFilterCallback } from "multer";
import type { Request } from "express";

const storage = multer.memoryStorage();

const fileFilter = (
    req: Request,
    file: Express.Multer.File,
    cb: FileFilterCallback
): void => {
    const allowed = ["image/jpeg", "image/jpg", "image/png"];
    allowed.includes(file.mimetype) ? cb(null, true) : cb(null, false);
};

export const uploadFile = multer({
    storage,
    fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 }
}).single("profile_src"); 
