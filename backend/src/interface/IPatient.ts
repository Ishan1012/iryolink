import { Document } from "mongoose";

export interface IPatient extends Document {
    patientId: string;
    name: string;
    age: number;
    gander: string;
    contact: string;
    uploadedFiles?: string;
    createdAt: Date;
    updatedAt: Date;
}