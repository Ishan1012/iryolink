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
exports.ResultRepository = void 0;
const Result_1 = require("../model/Result");
class ResultRepository {
    saveResult(result) {
        return __awaiter(this, void 0, void 0, function* () {
            const newResult = new Result_1.Result(result);
            return yield newResult.save();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Result_1.Result.findById(id).exec();
        });
    }
    findByResultId(resultId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Result_1.Result.findOne({ resultId }).exec();
        });
    }
    findByTrends(trendCategory) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Result_1.Result.find({ trendCategory }).exec();
        });
    }
    findByPatientId(patientId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Result_1.Result.find({ patientId }).exec();
        });
    }
    getAllResults() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Result_1.Result.find().exec();
        });
    }
}
exports.ResultRepository = ResultRepository;
//# sourceMappingURL=ResultRepository.js.map