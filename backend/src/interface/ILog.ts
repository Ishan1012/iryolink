import mongoose, { Document } from "mongoose";

export interface ILog extends Document {
    logId: string;
    doctorId?: mongoose.Types.ObjectId;
    action: string;
    timestamp: Date;
    status: LogStatus;
    datasetId?: mongoose.Types.ObjectId;
}

export type LogStatus = "PENDING"
  | "IN_PROGRESS"
  | "SUCCESS"
  | "FAILED"
  | "CANCELLED"
  | "RETRY";