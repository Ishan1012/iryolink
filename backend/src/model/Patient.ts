import mongoose, { Schema } from "mongoose";
import { Gender, IPatient } from "../interface/IPatient";
import { v4 as uuidv4 } from "uuid";

const patientSchema = new Schema<IPatient>({
    patientId: {
        type: String,
        default: uuidv4,
        unique: true
    },
    name: {
        type: String,
        required: true,
        minLength: 1
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
        min: 0
    },
    gender: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        default: false,
    },
    verificationToken: {
        type: String,
        required: false
    },
    uploadedFiles: {
        type: String,
        required: false
    },
    profilePicture: {
        type: String,
        required: false
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

export const Patient = mongoose.model<IPatient>("Patient", patientSchema);