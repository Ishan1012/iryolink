import { Request, Response } from "express";
import { LogService } from "../service/LogService";

const logService = new LogService();

export const saveLog = async (req: Request, res: Response) => {
    try {
        const log = await logService.saveLog(req.body);
        if(!log) {
            return res.status(400).json({ success: false, message: "Failed to create log" });
        }
        return res.status(200).json({ success: true, log });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error: String(error) });
    }
};

export const getLogById = async (req: Request, res: Response) => {
    try {
        const logId = req.params.id;
        if (!logId) {
            return res.status(400).json({ success: false, message: "logId is required" });
        }
        const log = await logService.findById(logId);
        if (!log) {
            return res.status(404).json({ success: false, message: "Log not found" });
        }
        return res.status(200).json({ success: true, log });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error: String(error) });
    }
};

export const getLogsByDoctorId = async (req: Request, res: Response) => {
    try {
        const doctorId = req.params.doctorId;
        if(!doctorId) {
            return res.status(400).json({ success: false, message: "doctorId is required" });
        }
        const logs = await logService.findByDoctorId(doctorId);
        if(!logs || logs.length === 0) {
            return res.status(404).json({ success: false, message: "Logs not found" });
        }
        return res.status(200).json({ success: true, logs });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error: String(error) });
    }
};

export const getLogsOnDate = async (req: Request, res: Response) => {
    try {
        const { date } = req.query;
        if(!date || Array.isArray(date) || typeof date !== "string") {
            return res.status(400).json({ success: false, message: "Valid date is required" });
        }
        const timestamp = new Date(date);
        if(isNaN(timestamp.getTime())) {
            return res.status(400).json({ success: false, message: "Invalid date format" });
        }
        const logs = await logService.findLogsOnDate(timestamp);
        if(!logs || logs.length === 0) {
            return res.status(404).json({ success: false, message: "Logs not found" });
        }
        return res.status(200).json({ success: true, logs });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error: String(error) });
    }
};

export const updateLogStatus = async (req: Request, res: Response) => {
    try {
        const { logId, status } = req.body;
        if(!logId || !status) {
            return res.status(400).json({ success: false, message: "logId and status are required" });
        }
        const updatedLog = await logService.updateStatusByLogId(logId, status);
        if(!updatedLog) {
            return res.status(404).json({ success: false, message: "Log not found or status not updated" });
        }
        return res.status(200).json({ success: true, log: updatedLog });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error: String(error) });
    }
};

export const getAllLogs = async (req: Request, res: Response) => {
    try {
        const logs = await logService.getAllLogs();
        if(!logs || logs.length === 0) {
            return res.status(404).json({ success: false, message: "Logs not found" });
        }
        return res.status(200).json({ success: true, logs });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error: String(error) });
    }
};