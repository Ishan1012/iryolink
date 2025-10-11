import { Document } from "mongoose";

export interface IDoctor extends Document {
    doctorId: string;
    name: string;
    email: string;
    password: string;
    specialization: string;
    contact: string;
    verified: boolean;
    verificationToken?: string;
    profilePicture?: string;
    organisation: string;
    accessLogs?: string;
    createdAt: Date;
    updatedAt: Date;
}