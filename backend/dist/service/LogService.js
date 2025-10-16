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
exports.LogService = void 0;
const mongoose_1 = require("mongoose");
const ILog_1 = require("../interface/ILog");
const LogRepository_1 = require("../repository/LogRepository");
class LogService {
    constructor() {
        this.logRepository = new LogRepository_1.LogRepository();
    }
    saveLog(log) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.logRepository.saveLog(log);
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const idObj = new mongoose_1.Types.ObjectId(id);
            return yield this.logRepository.findById(idObj);
        });
    }
    findByLogId(logId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.logRepository.findByLogId(logId);
        });
    }
    findByDoctorId(doctorId) {
        return __awaiter(this, void 0, void 0, function* () {
            const doctorIdObj = new mongoose_1.Types.ObjectId(doctorId);
            return yield this.logRepository.findByDoctorId(doctorIdObj);
        });
    }
    findLogsOnDate(timestamp) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.logRepository.findLogsOnDate(timestamp);
        });
    }
    updateStatusByLogId(logId, status) {
        return __awaiter(this, void 0, void 0, function* () {
            status = status.toUpperCase();
            if (ILog_1.LogStatusValues.find((s) => s === status) === undefined) {
                throw new Error("Invalid status value");
            }
            return yield this.logRepository.updateStatusByLogId(logId, status);
        });
    }
    getAllLogs() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.logRepository.getAllLogs();
        });
    }
}
exports.LogService = LogService;
//# sourceMappingURL=LogService.js.map