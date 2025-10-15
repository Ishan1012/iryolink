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
exports.getAllResults = exports.getResultsByPatientId = exports.getResultsByTrends = exports.getResultsOfDataset = exports.getResultById = exports.saveResult = void 0;
const ResultService_1 = require("../service/ResultService");
const resultService = new ResultService_1.ResultService();
const saveResult = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield resultService.saveResult(req.body);
        if (!result) {
            return res.status(400).json({ success: false, message: "Failed to save result" });
        }
        return res.status(201).json({ success: true, result });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Failed to save result", error: String(error) });
    }
});
exports.saveResult = saveResult;
const getResultById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resultId = req.params.id;
        const result = yield resultService.findByResultId(resultId);
        if (!result) {
            return res.status(404).json({ success: false, message: "Result not found" });
        }
        return res.status(200).json({ success: true, result });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Failed to fetch result", error: String(error) });
    }
});
exports.getResultById = getResultById;
const getResultsOfDataset = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const datasetId = req.params.id;
        const results = yield resultService.findResultsOfDataset(datasetId);
        if (!results || results.length === 0) {
            return res.status(404).json({ success: false, message: "Results not found" });
        }
        return res.status(200).json({ success: true, results });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Failed to fetch results", error: String(error) });
    }
});
exports.getResultsOfDataset = getResultsOfDataset;
const getResultsByTrends = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const trendCategory = req.params.category;
        const results = yield resultService.findByTrends(trendCategory);
        if (!results || results.length === 0) {
            return res.status(404).json({ success: false, message: "Results not found" });
        }
        return res.status(200).json({ success: true, results });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Failed to fetch results", error: String(error) });
    }
});
exports.getResultsByTrends = getResultsByTrends;
const getResultsByPatientId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const patientId = req.params.id;
        const results = yield resultService.findByPatientId(patientId);
        if (!results || results.length === 0) {
            return res.status(404).json({ success: false, message: "Results not found", results });
        }
        return res.status(200).json({ success: true, results });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Failed to fetch results", error: String(error) });
    }
});
exports.getResultsByPatientId = getResultsByPatientId;
const getAllResults = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield resultService.getAllResults();
        if (!results || results.length === 0) {
            return res.status(404).json({ success: false, message: "Results not found" });
        }
        return res.status(200).json({ success: true, results });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Failed to fetch results", error: String(error) });
    }
});
exports.getAllResults = getAllResults;
//# sourceMappingURL=ResultController.js.map