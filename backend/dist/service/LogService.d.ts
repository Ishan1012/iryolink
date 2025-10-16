import { ILog } from "../interface/ILog";
export declare class LogService {
    private logRepository;
    constructor();
    saveLog(log: Partial<ILog>): Promise<ILog | null>;
    findById(id: string): Promise<ILog | null>;
    findByLogId(logId: string): Promise<ILog | null>;
    findByDoctorId(doctorId: string): Promise<ILog[]>;
    findLogsOnDate(timestamp: Date): Promise<ILog[]>;
    updateStatusByLogId(logId: string, status: string): Promise<ILog | null>;
    getAllLogs(): Promise<ILog[]>;
}
//# sourceMappingURL=LogService.d.ts.map