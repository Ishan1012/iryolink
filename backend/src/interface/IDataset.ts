import { Document } from "mongoose";

export interface IDataset extends Document{
    datasetId: string;
    patientId: string;
    hash: string;
    fileLocation: string;
    consentGranted: boolean;
    uploadedAt: Date;
    dataType: string;
}