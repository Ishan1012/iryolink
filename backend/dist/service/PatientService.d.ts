import { IPatient } from "../interface/IPatient";
export declare class PatientService {
    private patientRepository;
    constructor();
    savePatient(patient: Partial<IPatient>): Promise<IPatient | null>;
    findById(ids: string): Promise<IPatient | null>;
    findByEmail(email: string): Promise<IPatient | null>;
    findByPatientId(patientId: string): Promise<IPatient | null>;
    isVerified(patientId: string): Promise<boolean | null>;
    getVerificationToken(patientId: string): Promise<string | null>;
    getAllPatients(): Promise<IPatient[]>;
    deletePatient(ids: string): Promise<void>;
}
//# sourceMappingURL=PatientService.d.ts.map