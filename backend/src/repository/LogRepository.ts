import { Types } from "mongoose";
import { ILog, LogStatus } from "../interface/ILog";
import { Log } from "../model/Log";

export class LogRepository {
    async saveLog(log: Partial<ILog>): Promise<ILog | null> {
        const newLog = new Log(log);
        return await newLog.save();
    }

    async findById(id: Types.ObjectId): Promise<ILog | null> {
        return await Log.findById(id).exec();
    }

    async findByLogId(logId: string): Promise<ILog | null> {
        return await Log.findOne({ logId }).exec();
    }

    async findByDoctorId(doctorId: Types.ObjectId): Promise<ILog[]> {
        return await Log.find({ doctorId }).exec();
    }

    async findLogsOnDate(timestamp: Date): Promise<ILog[]> {
        return await Log.find({ timestamp }).exec();
    }

    async updateStatusByLogId(logId: string, status: LogStatus): Promise<ILog | null> {
        return await Log.findOneAndUpdate({ logId }, { status }, { new: true }).exec();
    }

    async getAllLogs(): Promise<ILog[]> {
        return await Log.find();
    }
}