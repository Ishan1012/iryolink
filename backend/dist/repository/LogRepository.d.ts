import { Types } from "mongoose";
import { ILog } from "../interface/ILog";
export declare class LogRepository {
    saveLog(log: Partial<ILog>): Promise<ILog | null>;
    findById(id: string): Promise<ILog | null>;
    findByLogId(logId: string): Promise<ILog | null>;
    findByDoctorId(doctorId: Types.ObjectId): Promise<ILog[]>;
    findLogsOnDate(timestamp: Date): Promise<ILog[]>;
    getAllLogs(): Promise<ILog[]>;
}
//# sourceMappingURL=LogRepository.d.ts.map