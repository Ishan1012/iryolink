import { Types } from "mongoose";
import { IDoctor } from "../interface/IDoctor";
import { DoctorRepository } from "../repository/DoctorRepository";

export class DoctorService {
    private doctorRepository: DoctorRepository;

    constructor() {
        this.doctorRepository = new DoctorRepository();
    }

    async saveDoctor(doctor: Partial<IDoctor>): Promise<IDoctor | null> {
        return await this.doctorRepository.saveDoctor(doctor);
    }

    async findById(ids: string): Promise<IDoctor | null> {
        const id = new Types.ObjectId(ids);
        return await this.doctorRepository.findById(id);
    }

    async findByDoctorId(doctorId: string): Promise<IDoctor | null> {
        return await this.doctorRepository.findByDoctorId(doctorId);
    }

    async findByEmail(email: string): Promise<IDoctor | null> {
        return await this.doctorRepository.findByEmail(email);
    }

    async isVerified(doctorId: string): Promise<boolean | null> {
        return await this.doctorRepository.isVerified(doctorId);
    }

    async getVerificationToken(doctorId: string): Promise<string | null> {
        return await this.doctorRepository.getVerificationToken(doctorId);
    }

    async getAllDoctors(): Promise<IDoctor[]> {
        return await this.doctorRepository.getAllDoctors();
    }

    async deleteDoctor(id: string): Promise<void> {
        return await this.doctorRepository.deleteDoctor(id);
    }
}
