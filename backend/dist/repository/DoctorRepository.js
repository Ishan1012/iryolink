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
exports.DoctorRepository = void 0;
const Doctor_1 = require("../model/Doctor");
class DoctorRepository {
    saveDoctor(doctor) {
        return __awaiter(this, void 0, void 0, function* () {
            const newDoctor = new Doctor_1.Doctor(doctor);
            return yield newDoctor.save();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Doctor_1.Doctor.findById(id).exec();
        });
    }
    findByDoctorId(doctorId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Doctor_1.Doctor.findOne({ doctorId }).exec();
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Doctor_1.Doctor.findOne({ email }).exec();
        });
    }
    isVerified(doctorId) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const doctor = yield Doctor_1.Doctor.findOne({ doctorId }).select('verified').exec();
            return (_a = doctor === null || doctor === void 0 ? void 0 : doctor.verified) !== null && _a !== void 0 ? _a : null;
        });
    }
    getVerificationToken(doctorId) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const doctor = yield Doctor_1.Doctor.findOne({ doctorId }).select('verificationToken').exec();
            return (_a = doctor === null || doctor === void 0 ? void 0 : doctor.verificationToken) !== null && _a !== void 0 ? _a : null;
        });
    }
    getAllDoctors() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Doctor_1.Doctor.find().exec();
        });
    }
    deleteDoctor(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Doctor_1.Doctor.findByIdAndDelete(id).exec();
        });
    }
}
exports.DoctorRepository = DoctorRepository;
//# sourceMappingURL=DoctorRepository.js.map