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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientService = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const PatientRepository_1 = require("../repository/PatientRepository");
class PatientService {
    constructor() {
        this.patientRepository = new PatientRepository_1.PatientRepository();
    }
    savePatient(patient) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.patientRepository.savePatient(patient);
        });
    }
    findById(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = new mongoose_1.default.Types.ObjectId(ids);
            return this.patientRepository.findById(id);
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.patientRepository.findByEmail(email);
        });
    }
    findByPatientId(patientId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.patientRepository.findByPatientId(patientId);
        });
    }
    isVerified(patientId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.patientRepository.isVerified(patientId);
        });
    }
    getVerificationToken(patientId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.patientRepository.getVerificationToken(patientId);
        });
    }
    getAllPatients() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.patientRepository.getAllPatients();
        });
    }
    deletePatient(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = new mongoose_1.default.Types.ObjectId(ids);
            this.patientRepository.deletePatient(id);
        });
    }
}
exports.PatientService = PatientService;
//# sourceMappingURL=PatientService.js.map