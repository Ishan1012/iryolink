import mongoose from "mongoose";
import { IPatient } from "../interface/IPatient";
import { Patient } from "../model/Patient";

export class PatientRepository {

    async savePatient(patient: Partial<IPatient>): Promise<IPatient | null> {
        const newPatient = new Patient(patient);
        return await newPatient.save();
    }

    async findByEmail(email: string): Promise<IPatient | null> {
        return await Patient.findOne({ email }).exec();
    }

    async findById(id: mongoose.Types.ObjectId): Promise<IPatient | null> {
        return await Patient.findById(id).exec();
    }

    async findByPatientId(patientId: string): Promise<IPatient | null> {
        return await Patient.findOne({ patientId }).exec();
    }

    async isVerified(patientId: string): Promise<boolean | null> {
        const patient = await Patient.findOne({ patientId }).select('verified').exec();

        return patient?.verified ?? null;
    }

    async getVerificationToken(patientId: string): Promise<string | null> {
        const patient = await Patient.findOne({ patientId }).select('verificationToken').exec();

        return patient?.verificationToken ?? null;
    }

    async getAllPatients(): Promise<IPatient[]> {
        return await Patient.find().exec();
    }

    async deletePatient(id: string): Promise<void> {
        await Patient.findByIdAndDelete(id).exec();
    }
}