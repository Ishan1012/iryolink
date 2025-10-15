import { Document, Types } from "mongoose";

export interface IDoctor extends Document {
    doctorId: string;
    name: string;
    email: string;
    password?: string;
    specialization: string;
    contact: string;
    isOAuth: boolean;
    verified: boolean;
    verificationToken?: string;
    profilePicture?: string;
    organisation: string;
    accessLogs?: Types.ObjectId[];
    createdAt: Date;
    updatedAt: Date;
}