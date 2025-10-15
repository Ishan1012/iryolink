import { Request, Response } from "express";
import { AuthService } from "../service/AuthService";
import { AuthRequest } from "../middleware/auth";

const authService = new AuthService();

export const signup = async (req: Request, res: Response) => {
    try {
        if (req.body.usertype === "patient") {
            const createdPatient = await authService.signUpPatient(req.body);
            if(!createdPatient) {
                return res.status(400).json({ success: false, message: "unable to create user!" });
            }
            return res.status(201).json({ success: true, user: createdPatient });
        } else if (req.body.usertype === "doctor") {
            const createdDoctor = await authService.signUpDoctor(req.body);
            if(!createdDoctor) {
                return res.status(400).json({ success: false, message: "unable to create user!" });
            }
            return res.status(201).json({ success: true, user: createdDoctor });
        } else {
            return res.status(401).json({ success: false, message: "invalid usertype!" });
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error: String(error) });
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
        return res.status(500).json({ success: false, message: "Internal server error", error: String(error) });
    }
};

export const me = async (req: AuthRequest, res: Response) => {
    try {
        const user = req.user;

        if(!user) {
            return res.status(401).json({ success: false, message: "No user found!" });
        }

        if(!user.userId) {
            return res.status(401).json({ success: false, message: "No userId found!" });
        }

        if(user.role === "Patient") {
            const patient = await authService.getPatientByPatientId(user.userId);
            if (!patient) {
                return res.status(404).json({ success: false, message: "Patient not found!" });
            }
            return res.status(200).json({ success: true, user: patient });
        } else if(user.role === "Doctor") {
            const doctor = await authService.getDoctorByDoctorId(user.userId);
            if (!doctor) {
                return res.status(404).json({ success: false, message: "Doctor not found!" });
            }
            return res.status(200).json({ success: true, user: doctor });
        } else {
            return res.status(401).json({ success: false, message: "Unauthorized user role!" });
        }
    } catch (error) {
        if(error instanceof Error) {
            return res.status(500).json({ success: false, message: "Internal server error", error: error.message });
        } else {
            return res.status(500).json({ success: false, message: "Internal server error", error: String(error) });
        }
    }
};

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