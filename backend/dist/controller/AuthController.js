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
Object.defineProperty(exports, "__esModule", { value: true });
exports.me = exports.signin = exports.signup = void 0;
const AuthService_1 = require("../service/AuthService");
const authService = new AuthService_1.AuthService();
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.body.usertype === "patient") {
            const createdPatient = yield authService.signUpPatient(req.body);
            if (!createdPatient) {
                return res.status(400).json({ success: false, message: "unable to create user!" });
            }
            return res.status(201).json({ success: true, user: createdPatient });
        }
        else if (req.body.usertype === "doctor") {
            const createdDoctor = yield authService.signUpDoctor(req.body);
            if (!createdDoctor) {
                return res.status(400).json({ success: false, message: "unable to create user!" });
            }
            return res.status(201).json({ success: true, user: createdDoctor });
        }
        else {
            return res.status(401).json({ success: false, message: "invalid usertype!" });
        }
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error: String(error) });
    }
});
exports.signup = signup;
const signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.body.usertype === "patient") {
            const _a = req.body, { usertype } = _a, patientDetails = __rest(_a, ["usertype"]);
            const patient = yield authService.signInPatient(patientDetails);
            if (patient) {
                return res.status(200).json({ success: true, user: patient });
            }
            else {
                return res.status(401).json({ success: false, message: "Invalid credentials" });
            }
        }
        else if (req.body.usertype === "doctor") {
            const _b = req.body, { usertype } = _b, doctorDetails = __rest(_b, ["usertype"]);
            const doctor = yield authService.signInDoctor(doctorDetails);
            if (doctor) {
                return res.status(200).json({ success: true, user: doctor });
            }
            else {
                return res.status(401).json({ success: false, message: "Invalid credentials" });
            }
        }
        else {
            return res.status(401).json({ success: false, message: "invalid usertype!" });
        }
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error: String(error) });
    }
});
exports.signin = signin;
const me = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.user;
        if (!user) {
            return res.status(401).json({ success: false, message: "No user found!" });
        }
        if (!user.userId) {
            return res.status(401).json({ success: false, message: "No userId found!" });
        }
        if (user.role === "Patient") {
            const patient = yield authService.getPatientByPatientId(user.userId);
            if (!patient) {
                return res.status(404).json({ success: false, message: "Patient not found!" });
            }
            return res.status(200).json({ success: true, user: patient });
        }
        else if (user.role === "Doctor") {
            const doctor = yield authService.getDoctorByDoctorId(user.userId);
            if (!doctor) {
                return res.status(404).json({ success: false, message: "Doctor not found!" });
            }
            return res.status(200).json({ success: true, user: doctor });
        }
        else {
            return res.status(401).json({ success: false, message: "Unauthorized user role!" });
        }
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ success: false, message: "Internal server error", error: error.message });
        }
        else {
            return res.status(500).json({ success: false, message: "Internal server error", error: String(error) });
        }
    }
});
exports.me = me;
// export const updateProfile = async (req: Request, res: Response) => {
//     try {
//         const updatedUser = await authService.updateProfile(req.body, req);
//         return res.status(200).json({ success: true, user: updatedUser });
//     } catch (error) {
//         return res.status(500).json({ success: false, message: "Internal server error", error: error.message });
//     }
// };
// export const googleAuthUrl = (req: Request, res: Response) => {
//     try {
//         const url = authService.getGoogleAuthUrl();
//         return res.status(200).json({ success: true, url });
//     } catch (error) {
//         return res.status(500).json({ success: false, message: "Internal server error", error: error.message });
//     }
// };
// export const googleCallback = async (req: Request, res: Response) => {
//     try {
//         const user = await authService.handleGoogleCallback(req.query);
//         return res.status(200).json({ success: true, user });
//     } catch (error) {
//         return res.status(500).json({ success: false, message: "Internal server error", error: error });
//     }
// };
//# sourceMappingURL=AuthController.js.map