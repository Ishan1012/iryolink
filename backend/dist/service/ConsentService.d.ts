import { IConsent } from "../interface/IConsent";
export declare class ConsentService {
    private consentRepository;
    constructor();
    giveConsent(consent: Partial<IConsent>): Promise<IConsent | null>;
    grantConsent(consentId: string): Promise<IConsent | null>;
    revokeConsent(consentId: string): Promise<IConsent | null>;
    findById(id: string): Promise<IConsent | null>;
    findByHash(hash: string): Promise<IConsent | null>;
    findByPatientAddress(patientAddress: string): Promise<IConsent | null>;
    findRevokedConsents(): Promise<IConsent | null>;
    getAllConsents(): Promise<IConsent[]>;
}
//# sourceMappingURL=ConsentService.d.ts.map