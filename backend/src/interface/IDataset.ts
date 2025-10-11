import mongoose, { Document } from "mongoose";

export interface IDataset extends Document{
    datasetId: string;
    patientId?: mongoose.Types.ObjectId;
    doctorId?: mongoose.Types.ObjectId;
    hash?: mongoose.Types.ObjectId;
    fileLocation: string;
    consentGranted: boolean;
    uploadedAt: Date;
    dataType: string;
}