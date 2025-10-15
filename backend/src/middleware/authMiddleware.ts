import { NextFunction, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { AuthRequest } from "./auth";

const SECRET_KEY = process.env.JWT_SECRET_KEY || "random-secret-key";

export const verifyToken = (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer")) {
            return res.status(401).json({
                error: "Access denied. No token provided.",
                message:
                    "Please provide a valid Bearer token in the Authorization Header.",
            });
        }

        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token as string, SECRET_KEY) as JwtPayload;
        req.user = decoded;
        next();
    } catch (err) {
        if (err instanceof jwt.TokenExpiredError) {
            return res.status(401).json({
                error: "Access denied. Token expired. " + err,
                message: "Please login again to get a new token.",
            });
        } else if (err instanceof jwt.JsonWebTokenError) {
            return res.status(401).json({
                error: "Access denied. Invalid token. " + err,
                message: "Please provide a valid Bearer token in the Authorization Header.",
            });
        } else {
            return res.status(500).json({
                error: "Token verification failed. " + err,
                message: "Internal server error during token verification.",
            });
        }
    }
}

export const requireAdminRole = (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
        return res.status(500).json({
            error: "Token verification failed.",
            message: "Internal server error during token verification.",
        });
    }
    if (req.user.role !== "Admin") {
        return res.status(401).json({
            error: "Admin access required.",
            message: "Please connect with your adminstrator to access this resource.",
        });
    }
    next();
}

export const requireAdminRoleOrDoctorRole = (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
        return res.status(500).json({
            error: "Token verification failed.",
            message: "Internal server error during token verification.",
        });
    }
    if (req.user.role !== "Admin" && req.user.role !== "Doctor") {
        return res.status(401).json({
            error: "Admin/Doctor access required.",
            message: "Please connect with your adminstrator to access this resource.",
        });
    }
    console.log("Reached");
    next();
}