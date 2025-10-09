import { Document } from "mongoose";

export interface ILog extends Document {
    logId: string;
    doctorId: string;
    action: string;
    timestamp: Date;
    status: string;
    datasetId: string;
}