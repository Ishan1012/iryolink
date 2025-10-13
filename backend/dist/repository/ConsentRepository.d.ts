import mongoose from "mongoose";
import { IConsent } from "../interface/IConsent";
export declare class ConsentRepository {
    saveConsent(consent: Partial<IConsent>): Promise<IConsent | null>;
    findById(id: mongoose.Types.ObjectId): Promise<IConsent | null>;
    findByHash(hash: string): Promise<IConsent | null>;
    findByPatientAddress(patientAddress: string): Promise<IConsent | null>;
    findPendingConsents(): Promise<IConsent | null>;
    getAllConsents(): Promise<IConsent[]>;
}
//# sourceMappingURL=ConsentRepository.d.ts.map