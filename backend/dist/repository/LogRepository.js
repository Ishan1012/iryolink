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
exports.LogRepository = void 0;
const Log_1 = require("../model/Log");
class LogRepository {
    saveLog(log) {
        return __awaiter(this, void 0, void 0, function* () {
            const newLog = new Log_1.Log(log);
            return yield newLog.save();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Log_1.Log.findById(id).exec();
        });
    }
    findByLogId(logId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Log_1.Log.findOne({ logId }).exec();
        });
    }
    findByDoctorId(doctorId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Log_1.Log.find({ doctorId }).exec();
        });
    }
    findLogsOnDate(timestamp) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Log_1.Log.find({ timestamp }).exec();
        });
    }
    updateStatusByLogId(logId, status) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Log_1.Log.findOneAndUpdate({ logId }, { status }, { new: true }).exec();
        });
    }
    getAllLogs() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Log_1.Log.find();
        });
    }
}
exports.LogRepository = LogRepository;
//# sourceMappingURL=LogRepository.js.map