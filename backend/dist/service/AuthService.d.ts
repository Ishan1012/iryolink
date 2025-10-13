import { IPatient } from "../interface/IPatient";
import { IDoctor } from "../interface/IDoctor";
export declare class AuthService {
    private patientService;
    private doctorService;
    private jwtService;
    constructor();
    signUpPatient(signUpRequest: IPatient): Promise<IPatient | null>;
    signUpDoctor(signUpRequest: IDoctor): Promise<IDoctor | null>;
    signInPatient(signInRequest: IPatient): Promise<string | null>;
    signInDoctor(signInRequest: IDoctor): Promise<string | null>;
}
//# sourceMappingURL=AuthService.d.ts.map