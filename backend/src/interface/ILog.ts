import { Document, Types } from "mongoose";

export interface ILog extends Document {
    logId: string;
    doctorId?: Types.ObjectId;
    action: string;
    timestamp: Date;
    status: LogStatus;
    datasetId?: Types.ObjectId;
}

export const LogStatusValues = [
  "PENDING",
  "IN_PROGRESS",
  "SUCCESS",
  "FAILED",
  "CANCELLED",
  "RETRY",
] as const;

export type LogStatus = typeof LogStatusValues[number];