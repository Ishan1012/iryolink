import { Document, Types } from "mongoose";
export interface ILog extends Document {
    logId: string;
    doctorId?: Types.ObjectId;
    action: string;
    timestamp: Date;
    status: LogStatus;
    datasetId?: Types.ObjectId;
}
export type LogStatus = "PENDING" | "IN_PROGRESS" | "SUCCESS" | "FAILED" | "CANCELLED" | "RETRY";
//# sourceMappingURL=ILog.d.ts.map