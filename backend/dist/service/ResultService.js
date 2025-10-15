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
exports.ResultService = void 0;
const mongoose_1 = require("mongoose");
const ResultRepository_1 = require("../repository/ResultRepository");
class ResultService {
    constructor() {
        this.resultRepository = new ResultRepository_1.ResultRepository();
    }
    saveResult(result) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.resultRepository.saveResult(result);
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const ids = new mongoose_1.Types.ObjectId(id);
            return this.resultRepository.findById(ids);
        });
    }
    findByResultId(datasetId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.resultRepository.findByResultId(datasetId);
        });
    }
    findResultsOfDataset(datasetId) {
        return __awaiter(this, void 0, void 0, function* () {
            const datasetIds = new mongoose_1.Types.ObjectId(datasetId);
            return this.resultRepository.findResultsOfDataset(datasetIds);
        });
    }
    findByTrends(trendCategory) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.resultRepository.findByTrends(trendCategory);
        });
    }
    findByPatientId(patientId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.resultRepository.findByPatientId(patientId);
        });
    }
    getAllResults() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.resultRepository.getAllResults();
        });
    }
}
exports.ResultService = ResultService;
//# sourceMappingURL=ResultService.js.map