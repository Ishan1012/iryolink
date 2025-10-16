import { Types } from "mongoose";
import { ILog, LogStatus } from "../interface/ILog";
export declare class LogRepository {
    saveLog(log: Partial<ILog>): Promise<ILog | null>;
    findById(id: Types.ObjectId): Promise<ILog | null>;
    findByLogId(logId: string): Promise<ILog | null>;
    findByDoctorId(doctorId: Types.ObjectId): Promise<ILog[]>;
    findLogsOnDate(timestamp: Date): Promise<ILog[]>;
    updateStatusByLogId(logId: string, status: LogStatus): Promise<ILog | null>;
    getAllLogs(): Promise<ILog[]>;
}
//# sourceMappingURL=LogRepository.d.ts.map