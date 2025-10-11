import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import { AuthRequest } from "./auth";

const SECRET_KEY = process.env.JWT_SECRET || "random-secret-key";

export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization;
    
        if(!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Unauthorized: No token" });
        }
        
        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(token as string, SECRET_KEY);
        req.user = decoded;
        next();
    } catch(err) {
        return res.status(401).json({ message: "Unauthorized: Invalid token, err: "+err });
    }
}