import mongoose from "mongoose";
import { IPatient } from "../interface/IPatient";
import { PatientRepository } from "../repository/PatientRepository";

export class PatientService {
    private patientRepository: PatientRepository;

    constructor() {
        this.patientRepository = new PatientRepository();
    }

    async savePatient(patient: Partial<IPatient>): Promise<IPatient | null> {
        return await this.patientRepository.savePatient(patient);
    }

    async findById(ids: string): Promise<IPatient | null> {
        const id = new mongoose.Types.ObjectId(ids);
        return await this.patientRepository.findById(id);
    }

    async findByEmail(email: string): Promise<IPatient | null> {
        return await this.patientRepository.findByEmail(email);
    }

    async findByPatientId(patientId: string): Promise<IPatient | null> {
        return await this.patientRepository.findByPatientId(patientId);
    }

    async isVerified(patientId: string): Promise<boolean | null> {
        return await this.patientRepository.isVerified(patientId);
    }

    async getVerificationToken(patientId: string): Promise<string | null> {
        return await this.patientRepository.getVerificationToken(patientId);
    }

    async getAllPatients(): Promise<IPatient[]> {
        return await this.patientRepository.getAllPatients();
    }

    async deletePatient(ids: string): Promise<void> {
        const id = new mongoose.Types.ObjectId(ids);
        await this.patientRepository.deletePatient(id);
    }
}