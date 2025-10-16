import { Types } from "mongoose";
import { IConsent } from "../interface/IConsent";
import { ConsentRepository } from "../repository/ConsentRepository";

export class ConsentService {
    private consentRepository: ConsentRepository;

    constructor() {
        this.consentRepository = new ConsentRepository();
    }

    async giveConsent(consent: Partial<IConsent>): Promise<IConsent | null> {
        return await this.consentRepository.giveConsent(consent);
    }

    async grantConsent(consentId: string): Promise<IConsent | null> {
        return await this.consentRepository.grantConsent(consentId);
    }

    async revokeConsent(consentId: string): Promise<IConsent | null> {
        return await this.consentRepository.revokeConsent(consentId);
    }

    async findById(id: string): Promise<IConsent | null> {
        const idObj = new Types.ObjectId(id);
        return await this.consentRepository.findById(idObj);
    }

    async findByHash(hash: string): Promise<IConsent | null> {
        return await this.consentRepository.findByHash(hash);
    }

    async findByPatientAddress(patientAddress: string): Promise<IConsent | null> {
        return await this.consentRepository.findByPatientAddress(patientAddress);
    }

    async findRevokedConsents(): Promise<IConsent | null> {
        return await this.consentRepository.findRevokedConsents();
    }

    async getAllConsents(): Promise<IConsent[]> {
        return await this.consentRepository.getAllConsents();
    }
}