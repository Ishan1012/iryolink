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
exports.PatientRepository = void 0;
const Patient_1 = require("../model/Patient");
class PatientRepository {
    savePatient(patient) {
        return __awaiter(this, void 0, void 0, function* () {
            const newPatient = new Patient_1.Patient(patient);
            return yield newPatient.save();
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Patient_1.Patient.findOne({ email }).exec();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Patient_1.Patient.findById(id).exec();
        });
    }
    findByPatientId(patientId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Patient_1.Patient.findOne({ patientId }).exec();
        });
    }
    isVerified(patientId) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const patient = yield Patient_1.Patient.findOne({ patientId }).select('verified').exec();
            return (_a = patient === null || patient === void 0 ? void 0 : patient.verified) !== null && _a !== void 0 ? _a : null;
        });
    }
    getVerificationToken(patientId) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const patient = yield Patient_1.Patient.findOne({ patientId }).select('verificationToken').exec();
            return (_a = patient === null || patient === void 0 ? void 0 : patient.verificationToken) !== null && _a !== void 0 ? _a : null;
        });
    }
    getAllPatients() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Patient_1.Patient.find().exec();
        });
    }
    deletePatient(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Patient_1.Patient.findByIdAndDelete(id).exec();
        });
    }
}
exports.PatientRepository = PatientRepository;
//# sourceMappingURL=PatientRepository.js.map