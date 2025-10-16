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
exports.DatasetService = void 0;
const DatasetRepository_1 = require("../repository/DatasetRepository");
class DatasetService {
    constructor() {
        this.datasetRepository = new DatasetRepository_1.DatasetRepository();
    }
    saveDataset(dataset) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.datasetRepository.saveDataset(dataset);
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.datasetRepository.findById(id);
        });
    }
    findByDatasetId(datasetId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.datasetRepository.findByDatasetId(datasetId);
        });
    }
    updloadFiles(datasetId, url) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.datasetRepository.uploadFiles(datasetId, url);
        });
    }
    findRecordsOfPatient(patientId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.datasetRepository.findRecordsOfPatient(patientId);
        });
    }
    findRecordsOfDoctor(doctorId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.datasetRepository.findRecordsOfDoctor(doctorId);
        });
    }
    getDatasetWithConsent(datasetId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.datasetRepository.getDatasetWithConsent(datasetId);
        });
    }
    getAllDatasets() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.datasetRepository.getAllDatasets();
        });
    }
    deleteDataset(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.datasetRepository.deleteDataset(id);
        });
    }
}
exports.DatasetService = DatasetService;
//# sourceMappingURL=DatasetService.js.map