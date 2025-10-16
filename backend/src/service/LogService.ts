import { Types } from "mongoose";
import { ILog, LogStatus, LogStatusValues } from "../interface/ILog";
import { LogRepository } from "../repository/LogRepository";

export class LogService {
    private logRepository: LogRepository;

    constructor() {
        this.logRepository = new LogRepository();
    }

    async saveLog(log: Partial<ILog>): Promise<ILog | null> {
        return await this.logRepository.saveLog(log);
    }

    async findById(id: string): Promise<ILog | null> {
        const idObj = new Types.ObjectId(id);
        return await this.logRepository.findById(idObj);
    }

    async findByLogId(logId: string): Promise<ILog | null> {
        return await this.logRepository.findByLogId(logId);
    }

    async findByDoctorId(doctorId: string): Promise<ILog[]> {
        const doctorIdObj = new Types.ObjectId(doctorId);
        return await this.logRepository.findByDoctorId(doctorIdObj);
    }

    async findLogsOnDate(timestamp: Date): Promise<ILog[]> {
        return await this.logRepository.findLogsOnDate(timestamp);
    }

    async updateStatusByLogId(logId: string, status: string): Promise<ILog | null> {
        status = status.toUpperCase();
        if (LogStatusValues.find((s) => s === status) === undefined) {
            throw new Error("Invalid status value");
        }
        return await this.logRepository.updateStatusByLogId(logId, status as LogStatus);
    }

    async getAllLogs(): Promise<ILog[]> {
        return await this.logRepository.getAllLogs();
    }
}