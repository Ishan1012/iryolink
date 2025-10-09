import { Document } from "mongoose";

export interface IDoctor extends Document {
    doctorId: string;
    role: string;
    organisation: string;
    accessLogs?: string;
    createdAt: Date;
    updatedAt: Date;
}