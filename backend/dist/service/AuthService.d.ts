import { IPatient } from "../interface/IPatient";
import { IDoctor } from "../interface/IDoctor";
import { PublicDoctor } from "../types/PublicDoctor";
import { PublicPatient } from "../types/PublicPatient";
export declare class AuthService {
    private patientService;
    private doctorService;
    private jwtService;
    constructor();
    signUpPatient(signUpRequest: IPatient): Promise<IPatient | null>;
    signUpDoctor(signUpRequest: IDoctor): Promise<IDoctor | null>;
    signInPatient(signInRequest: IPatient): Promise<string | null>;
    signInDoctor(signInRequest: IDoctor): Promise<string | null>;
    getPatientByPatientId(patientId: string): Promise<PublicPatient | null>;
    getDoctorByDoctorId(doctorId: string): Promise<PublicDoctor | null>;
}
//# sourceMappingURL=AuthService.d.ts.map