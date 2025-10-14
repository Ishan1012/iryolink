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
exports.findRecordsOfDoctor = exports.findRecordsOfPatient = exports.getAllDatasets = exports.getDatasetWithConsent = exports.getDataset = exports.createDataset = void 0;
const DatasetService_1 = require("../service/DatasetService");
const mongoose_1 = require("mongoose");
const datasetService = new DatasetService_1.DatasetService();
const createDataset = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dataset = yield datasetService.saveDataset(req.body);
        return res.status(200).json({ success: true, dataset });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error });
    }
});
exports.createDataset = createDataset;
const getDataset = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { datasetId } = req.params;
        if (!datasetId) {
            return res.status(400).json({ success: false, message: "datasetId is required" });
        }
        const dataset = yield datasetService.findByDatasetId(datasetId);
        return res.status(200).json({ success: true, dataset });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error });
    }
});
exports.getDataset = getDataset;
const getDatasetWithConsent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { datasetId } = req.params;
        if (!datasetId) {
            return res.status(400).json({ success: false, message: "datasetId is required" });
        }
        const dataset = yield datasetService.getDatasetWithConsent(datasetId);
        return res.status(200).json({ success: true, dataset });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error });
    }
});
exports.getDatasetWithConsent = getDatasetWithConsent;
const getAllDatasets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const datasets = yield datasetService.getAllDatasets();
        return res.status(200).json({ success: true, datasets });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error });
    }
});
exports.getAllDatasets = getAllDatasets;
const findRecordsOfPatient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { patientId } = req.params;
        if (!patientId) {
            return res.status(200).json({ success: false, message: "patientId is required" });
        }
        const objectId = new mongoose_1.Types.ObjectId(patientId);
        const dataset = yield datasetService.findRecordsOfPatient(objectId);
        return res.status(200).json({ success: true, dataset });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error });
    }
});
exports.findRecordsOfPatient = findRecordsOfPatient;
const findRecordsOfDoctor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { doctorId } = req.params;
        if (!doctorId) {
            return res.status(200).json({ success: false, message: "doctorId is required" });
        }
        const objectId = new mongoose_1.Types.ObjectId(doctorId);
        const dataset = yield datasetService.findRecordsOfDoctor(objectId);
        return res.status(200).json({ success: true, dataset });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error });
    }
});
exports.findRecordsOfDoctor = findRecordsOfDoctor;
//# sourceMappingURL=DatasetController.js.map