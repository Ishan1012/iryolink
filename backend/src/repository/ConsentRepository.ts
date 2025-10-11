import mongoose from "mongoose";
import { IConsent } from "../interface/IConsent";
import { Consent } from "../model/Consent";

export class ConsentRepository {
    async saveConsent(consent: Partial<IConsent>): Promise<IConsent | null> {
        const newConsent = new Consent(consent);
        return await newConsent.save();
    }

    async findById(id: mongoose.Types.ObjectId): Promise<IConsent | null> {
        return await Consent.findById(id);
    }

    async findByHash(hash: string): Promise<IConsent | null> {
        return await Consent.findOne({ hash }).exec();
    }

    async findByPatientAddress(patientAddress: string): Promise<IConsent | null> {
        return await Consent.findOne({ patientAddress }).exec();
    }

    async findPendingConsents(): Promise<IConsent | null> {
        return await Consent.findOne({ granted: false }).exec();
    }

    async getAllConsents(): Promise<IConsent[]> {
        return await Consent.find().exec();
    }
}