import { Types } from "mongoose";
import { IPatient } from "../interface/IPatient";
export declare class PatientRepository {
    savePatient(patient: Partial<IPatient>): Promise<IPatient | null>;
    findByEmail(email: string): Promise<IPatient | null>;
    findById(id: Types.ObjectId): Promise<IPatient | null>;
    findByPatientId(patientId: string): Promise<IPatient | null>;
    isVerified(patientId: string): Promise<boolean | null>;
    getVerificationToken(patientId: string): Promise<string | null>;
    getAllPatients(): Promise<IPatient[]>;
    deletePatient(id: Types.ObjectId): Promise<void>;
}
//# sourceMappingURL=PatientRepository.d.ts.map