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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const JwtService_1 = require("./JwtService");
const bcrypt_1 = __importDefault(require("bcrypt"));
const PatientService_1 = require("./PatientService");
const DoctorService_1 = require("./DoctorService");
class AuthService {
    constructor() {
        this.jwtService = new JwtService_1.JwtService();
        this.patientService = new PatientService_1.PatientService();
        this.doctorService = new DoctorService_1.DoctorService();
    }
    signUpPatient(signUpRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            this.patientService = new PatientService_1.PatientService();
            const patient = yield this.patientService.findByEmail(signUpRequest.email);
            if (patient) {
                return null;
            }
            const hashedPassword = yield bcrypt_1.default.hash(signUpRequest.password, 10);
            const createdPatient = yield this.patientService.savePatient({
                name: signUpRequest.name,
                email: signUpRequest.email,
                password: hashedPassword,
                contact: signUpRequest.contact,
                gender: signUpRequest.gender,
                age: signUpRequest.age
            });
            return createdPatient;
        });
    }
    signUpDoctor(signUpRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            this.doctorService = new DoctorService_1.DoctorService();
            const doctor = yield this.doctorService.findByEmail(signUpRequest.email);
            if (doctor) {
                return null;
            }
            const hashedPassword = yield bcrypt_1.default.hash(signUpRequest.password, 10);
            const createdPatient = yield this.doctorService.saveDoctor({
                name: signUpRequest.name,
                email: signUpRequest.email,
                password: hashedPassword,
                organisation: signUpRequest.organisation,
                contact: signUpRequest.contact,
                specialization: signUpRequest.specialization
            });
            return createdPatient;
        });
    }
    signInPatient(signInRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            const patient = yield this.patientService.findByEmail(signInRequest.email);
            if (!patient) {
                return null;
            }
            const isPasswordValid = yield bcrypt_1.default.compare(signInRequest.password, patient.password);
            if (isPasswordValid) {
                return this.jwtService.generateToken(patient.email, "Patient", patient.patientId);
            }
            return null;
        });
    }
    signInDoctor(signInRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            const doctor = yield this.doctorService.findByEmail(signInRequest.email);
            if (!doctor) {
                return null;
            }
            const isPasswordValid = yield bcrypt_1.default.compare(signInRequest.password, doctor.password);
            if (isPasswordValid) {
                return this.jwtService.generateToken(doctor.email, "Doctor", doctor.doctorId);
            }
            return null;
        });
    }
    getPatientByPatientId(patientId) {
        return __awaiter(this, void 0, void 0, function* () {
            const patient = yield this.patientService.findByPatientId(patientId);
            if (!patient) {
                return null;
            }
            const patientObj = patient.toObject();
            const _a = patientObj, { _id, id, patientId: _, password } = _a, rest = __rest(_a, ["_id", "id", "patientId", "password"]);
            return rest;
        });
    }
    getDoctorByDoctorId(doctorId) {
        return __awaiter(this, void 0, void 0, function* () {
            const doctor = yield this.doctorService.findByDoctorId(doctorId);
            if (!doctor) {
                return null;
            }
            const doctorObj = doctor.toObject();
            const _a = doctorObj, { _id, id, doctorId: _, password } = _a, rest = __rest(_a, ["_id", "id", "doctorId", "password"]);
            return rest;
        });
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=AuthService.js.map