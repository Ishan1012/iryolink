import { Request } from "express";

export interface AuthRequest extends Request {
    user?: string | object;
    query: {
        username?: string;
        email?: string;
        password?: string;
    };
}