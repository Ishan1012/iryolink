import mongoose from "mongoose";
import { IDoctor } from "../interface/IDoctor";
export declare class DoctorRepository {
    saveDoctor(doctor: Partial<IDoctor>): Promise<IDoctor | null>;
    findById(id: mongoose.Types.ObjectId): Promise<IDoctor | null>;
    findByDoctorId(doctorId: string): Promise<IDoctor | null>;
    findByEmail(email: string): Promise<IDoctor | null>;
    isVerified(doctorId: string): Promise<boolean | null>;
    getVerificationToken(doctorId: string): Promise<string | null>;
    getAllDoctors(): Promise<IDoctor[]>;
    deleteDoctor(id: string): Promise<void>;
}
//# sourceMappingURL=DoctorRepository.d.ts.map