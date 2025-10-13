import { IDoctor } from "../interface/IDoctor";
export declare class DoctorService {
    private doctorRepository;
    constructor();
    saveDoctor(doctor: Partial<IDoctor>): Promise<IDoctor | null>;
    findById(ids: string): Promise<IDoctor | null>;
    findByDoctorId(doctorId: string): Promise<IDoctor | null>;
    findByEmail(email: string): Promise<IDoctor | null>;
    isVerified(doctorId: string): Promise<boolean | null>;
    getVerificationToken(doctorId: string): Promise<string | null>;
    getAllDoctors(): Promise<IDoctor[]>;
    deleteDoctor(id: string): Promise<void>;
}
//# sourceMappingURL=DoctorService.d.ts.map