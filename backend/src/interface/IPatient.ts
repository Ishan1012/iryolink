import { Document } from "mongoose";

export interface IPatient extends Document {
    patientId: string;
    name: string;
    email: string;
    password?: string;
    age: number;
    gender: Gender;
    contact: string;
    isOAuth: boolean;
    verified: boolean;
    verificationToken?: string;
    uploadedFiles?: string;
    profilePicture?: string;
    createdAt: Date;
    updatedAt: Date;
}

export type Gender = "MALE" | "FEMALE" | "OTHER";