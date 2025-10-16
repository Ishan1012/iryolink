"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllLogs = exports.updateLogStatus = exports.getLogsOnDate = exports.getLogsByDoctorId = exports.getLogById = exports.saveLog = void 0;
const LogService_1 = require("../service/LogService");
const logService = new LogService_1.LogService();
const saveLog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const log = yield logService.saveLog(req.body);
        if (!log) {
            return res.status(400).json({ success: false, message: "Failed to create log" });
        }
        return res.status(200).json({ success: true, log });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error: String(error) });
    }
});
exports.saveLog = saveLog;
const getLogById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const logId = req.params.id;
        if (!logId) {
            return res.status(400).json({ success: false, message: "logId is required" });
        }
        const log = yield logService.findById(logId);
        if (!log) {
            return res.status(404).json({ success: false, message: "Log not found" });
        }
        return res.status(200).json({ success: true, log });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error: String(error) });
    }
});
exports.getLogById = getLogById;
const getLogsByDoctorId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const doctorId = req.params.doctorId;
        if (!doctorId) {
            return res.status(400).json({ success: false, message: "doctorId is required" });
        }
        const logs = yield logService.findByDoctorId(doctorId);
        if (!logs || logs.length === 0) {
            return res.status(404).json({ success: false, message: "Logs not found" });
        }
        return res.status(200).json({ success: true, logs });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error: String(error) });
    }
});
exports.getLogsByDoctorId = getLogsByDoctorId;
const getLogsOnDate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { date } = req.query;
        if (!date || Array.isArray(date) || typeof date !== "string") {
            return res.status(400).json({ success: false, message: "Valid date is required" });
        }
        const timestamp = new Date(date);
        if (isNaN(timestamp.getTime())) {
            return res.status(400).json({ success: false, message: "Invalid date format" });
        }
        const logs = yield logService.findLogsOnDate(timestamp);
        if (!logs || logs.length === 0) {
            return res.status(404).json({ success: false, message: "Logs not found" });
        }
        return res.status(200).json({ success: true, logs });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error: String(error) });
    }
});
exports.getLogsOnDate = getLogsOnDate;
const updateLogStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { logId, status } = req.body;
        if (!logId || !status) {
            return res.status(400).json({ success: false, message: "logId and status are required" });
        }
        const updatedLog = yield logService.updateStatusByLogId(logId, status);
        if (!updatedLog) {
            return res.status(404).json({ success: false, message: "Log not found or status not updated" });
        }
        return res.status(200).json({ success: true, log: updatedLog });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error: String(error) });
    }
});
exports.updateLogStatus = updateLogStatus;
const getAllLogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const logs = yield logService.getAllLogs();
        if (!logs || logs.length === 0) {
            return res.status(404).json({ success: false, message: "Logs not found" });
        }
        return res.status(200).json({ success: true, logs });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error: String(error) });
    }
});
exports.getAllLogs = getAllLogs;
//# sourceMappingURL=LogController.js.map