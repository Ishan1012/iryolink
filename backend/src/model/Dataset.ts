import mongoose, { Schema } from "mongoose";
import { IDataset } from "../interface/IDataset";
import { v4 as uuidv4 } from "uuid";

const datasetSchema = new Schema<IDataset> ({
    datasetId: {
        type: String,
        default: "d:"+uuidv4,
        unique: true,
    },
    patientId: {
        type: Schema.Types.ObjectId,
        ref: 'Patient'
    },
    doctorId: {
        type: Schema.Types.ObjectId,
        ref: 'Doctor'
    },
    hash: {
        type: Schema.Types.ObjectId,
        ref: 'Consent'
    },
    fileLocation: {
        type: String,
        required: true,
    },
    consentGranted: {
        type: Boolean,
        required: true
    },
    uploadedAt: {
        type: Date,
        default: Date.now
    },
    dataType: {
        type: String,
        required: true
    }
});

export const Dataset = mongoose.model<IDataset>("Dataset", datasetSchema);