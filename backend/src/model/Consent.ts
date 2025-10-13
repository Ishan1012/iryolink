import mongoose, { Schema } from "mongoose";
import { IConsent } from "../interface/IConsent";
import { v4 as uuidv4 } from "uuid";

const consentSchema = new Schema<IConsent> ({
    hash: {
        type: String,
        default: () => "CONSENT"+uuidv4(),
        unique: true
    },
    patientAddress: {
        type: String,
        required: true,
        minLength: 1
    },
    granted: {
        type: Boolean,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

export const Consent = mongoose.model<IConsent>("Consent", consentSchema);