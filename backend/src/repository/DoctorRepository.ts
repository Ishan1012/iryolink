import mongoose from "mongoose";
import { IDoctor } from "../interface/IDoctor";
import { Doctor } from "../model/Doctor";

export class DoctorRepository {

    async saveDoctor(doctor: Partial<IDoctor>): Promise<IDoctor | null> {
        const newDoctor = new Doctor(doctor);
        return await newDoctor.save();
    }

    async findById(id: mongoose.Types.ObjectId): Promise<IDoctor | null> {
        return await Doctor.findById(id).exec();
    }

    async findByDoctorId(doctorId: string): Promise<IDoctor | null> {
        return await Doctor.findOne({ doctorId }).exec();
    }

    async findByEmail(email: string): Promise<IDoctor | null> {
        return await Doctor.findOne({ email }).exec();
    }

    async isVerified(doctorId: string): Promise<boolean | null> {
        const doctor = await Doctor.findOne({ doctorId }).select('verified').exec();
        return doctor?.verified ?? null;
    }

    async getVerificationToken(doctorId: string): Promise<string | null> {
        const doctor = await Doctor.findOne({ doctorId }).select('verificationToken').exec();
        return doctor?.verificationToken ?? null;
    }

    async getAllDoctors(): Promise<IDoctor[]> {
        return await Doctor.find().exec();
    }

    async deleteDoctor(id: string): Promise<void> {
        await Doctor.findByIdAndDelete(id).exec();
    }
}