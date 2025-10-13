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
exports.DatasetRepository = void 0;
const Dataset_1 = require("../model/Dataset");
class DatasetRepository {
    saveDataset(dataset) {
        return __awaiter(this, void 0, void 0, function* () {
            const newDataset = new Dataset_1.Dataset(dataset);
            return yield newDataset.save();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Dataset_1.Dataset.findById(id).exec();
        });
    }
    findByDatasetId(datasetId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Dataset_1.Dataset.findOne({ datasetId }).exec();
        });
    }
    findRecordsOfPatient(patientId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Dataset_1.Dataset.find({ patientId }).exec();
        });
    }
    findRecordsOfDoctor(doctorId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Dataset_1.Dataset.find({ doctorId }).exec();
        });
    }
    getDatasetWithConsent(datasetId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Dataset_1.Dataset.findOne({ datasetId }).populate('hash').exec();
        });
    }
    getAllDatasets() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Dataset_1.Dataset.find().exec();
        });
    }
    deleteDataset(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Dataset_1.Dataset.findByIdAndDelete(id).exec();
        });
    }
}
exports.DatasetRepository = DatasetRepository;
//# sourceMappingURL=DatasetRepository.js.map