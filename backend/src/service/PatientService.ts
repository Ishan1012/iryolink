import mongoose from "mongoose";
import { IPatient } from "../interface/IPatient";
import { PatientRepository } from "../repository/PatientRepository";

export class PatientService {
    private patientRepository: PatientRepository;

    constructor() {
        this.patientRepository = new PatientRepository();
    }

    async savePatient(patient: Partial<IPatient>): Promise<IPatient | null> {
        return this.patientRepository.savePatient(patient);
    }

    async findById(ids: string): Promise<IPatient | null> {
        const id = new mongoose.Types.ObjectId(ids);
        return this.patientRepository.findById(id);
    }

    async findByEmail(email: string): Promise<IPatient | null> {
        return this.patientRepository.findByEmail(email);
    }

    async findByPatientId(patientId: string): Promise<IPatient | null> {
        return this.patientRepository.findByPatientId(patientId);
    }

    async isVerified(patientId: string): Promise<boolean | null> {
        return this.patientRepository.isVerified(patientId);
    }

    async getVerificationToken(patientId: string): Promise<string | null> {
        return this.patientRepository.getVerificationToken(patientId);
    }

    async getAllPatients(): Promise<IPatient[]> {
        return this.patientRepository.getAllPatients();
    }

    async deletePatient(ids: string): Promise<void> {
        const id = new mongoose.Types.ObjectId(ids);
        this.patientRepository.deletePatient(id);
    }
}