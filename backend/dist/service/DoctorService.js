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
exports.DoctorService = void 0;
const mongoose_1 = require("mongoose");
const DoctorRepository_1 = require("../repository/DoctorRepository");
class DoctorService {
    constructor() {
        this.doctorRepository = new DoctorRepository_1.DoctorRepository();
    }
    saveDoctor(doctor) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.doctorRepository.saveDoctor(doctor);
        });
    }
    findById(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = new mongoose_1.Types.ObjectId(ids);
            return this.doctorRepository.findById(id);
        });
    }
    findByDoctorId(doctorId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.doctorRepository.findByDoctorId(doctorId);
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.doctorRepository.findByEmail(email);
        });
    }
    isVerified(doctorId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.doctorRepository.isVerified(doctorId);
        });
    }
    getVerificationToken(doctorId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.doctorRepository.getVerificationToken(doctorId);
        });
    }
    getAllDoctors() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.doctorRepository.getAllDoctors();
        });
    }
    deleteDoctor(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.doctorRepository.deleteDoctor(id);
        });
    }
}
exports.DoctorService = DoctorService;
//# sourceMappingURL=DoctorService.js.map