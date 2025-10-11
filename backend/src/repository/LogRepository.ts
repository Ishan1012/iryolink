import mongoose from "mongoose";
import { ILog } from "../interface/ILog";
import { Log } from "../model/Log";

export class LogRepository {
    async saveLog(log: Partial<ILog>): Promise<ILog | null> {
        const newLog = new Log(log);
        return await newLog.save();
    }

    async findById(id: string): Promise<ILog | null> {
        return await Log.findById(id).exec();
    }

    async findByLogId(logId: string): Promise<ILog | null> {
        return await Log.findOne({ logId }).exec();
    }

    async findByDoctorId(doctorId: mongoose.Types.ObjectId): Promise<ILog[]> {
        return await Log.find({ doctorId }).exec();
    }

    async findLogsOnDate(timestamp: Date): Promise<ILog[]> {
        return await Log.find({ timestamp }).exec();
    }

    async getAllLogs(): Promise<ILog[]> {
        return await Log.find();
    }
}