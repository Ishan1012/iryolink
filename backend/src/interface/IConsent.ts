import { Document } from "mongoose";

export interface IConsent extends Document {
    hash: string;
    patientAddress: string;
    granted: boolean;
    timestamp: Date;
}