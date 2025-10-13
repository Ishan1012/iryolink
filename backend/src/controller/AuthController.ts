import { Request, Response } from "express";
import { AuthService } from "../service/AuthService";

const authService = new AuthService();

export const signup = async (req: Request, res: Response) => {
    try {
        if (req.body.usertype === "patient") {
            const createdPatient = await authService.signUpPatient(req.body);
            return res.status(201).json({ success: true, user: createdPatient });
        } else if (req.body.usertype === "doctor") {
            const createdDoctor = await authService.signUpDoctor(req.body);
            return res.status(201).json({ success: true, user: createdDoctor });
        } else {
            return res.status(401).json({ success: false, message: "invalid usertype!" });
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error });
    }
};

export const signin = async (req: Request, res: Response) => {
    try {
        if (req.body.usertype === "patient") {
            const { usertype, ...patientDetails } = req.body;
            const patient = await authService.signInPatient(patientDetails);
            if (patient) {
                return res.status(200).json({ success: true, user: patient });
            } else {
                return res.status(401).json({ success: false, message: "Invalid credentials" });
            }
        } else if (req.body.usertype === "doctor") {
            const { usertype, ...doctorDetails } = req.body;
            const doctor = await authService.signInDoctor(doctorDetails);
            if (doctor) {
                return res.status(200).json({ success: true, user: doctor });
            } else {
                return res.status(401).json({ success: false, message: "Invalid credentials" });
            }
        } else {
            return res.status(401).json({ success: false, message: "invalid usertype!" });
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error });
    }
};

// export const me = async (req: Request, res: Response) => {
//     try {
//         const user = await authService.getMe(req);
//         return res.status(200).json({ success: true, user });
//     } catch (error) {
//         return res.status(500).json({ success: false, message: "Internal server error", error: error.message });
//     }
// };

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