import mongoose, { Schema } from "mongoose";
import { IDoctor } from "../interface/IDoctor";
import { v4 as uuidv4 } from "uuid";

const doctorSchema = new Schema<IDoctor>({
    doctorId: {
        type: String,
        default: "DOC"+uuidv4,
        unique: true
    },
    name: {
        type: String,
        required: true,
        minlength: 1
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    specialization: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        required: true,
    },
    verificationToken: {
        type: String,
        required: false,
    },
    profilePicture: {
        type: String,
        required: false,
    },
    organisation: {
        type: String,
        required: true
    },
    accessLogs: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

export const Doctor = mongoose.model<IDoctor>("Doctor", doctorSchema);