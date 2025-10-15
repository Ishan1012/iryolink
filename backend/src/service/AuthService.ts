import { JwtService } from "./JwtService";
import bcrypt from "bcrypt";
import { IPatient } from "../interface/IPatient";
import { PatientService } from "./PatientService";
import { DoctorService } from "./DoctorService";
import { IDoctor } from "../interface/IDoctor";
import { PublicDoctor } from "../types/PublicDoctor";
import { PublicPatient } from "../types/PublicPatient";

export class AuthService {
    private patientService: PatientService;
    private doctorService: DoctorService;
    private jwtService: JwtService;
    

    constructor() {
        this.jwtService = new JwtService();
        this.patientService = new PatientService();
        this.doctorService = new DoctorService();
    }

    async signUpPatient(signUpRequest: IPatient): Promise<IPatient | null> {
        this.patientService = new PatientService();

        const patient = await this.patientService.findByEmail(signUpRequest.email);

        if(patient) {
            return null;
        }

        const hashedPassword = await bcrypt.hash(signUpRequest.password as string, 10);

        const createdPatient = await this.patientService.savePatient({
            name: signUpRequest.name,
            email: signUpRequest.email,
            password: hashedPassword,
            contact: signUpRequest.contact,
            gender: signUpRequest.gender,
            age: signUpRequest.age
        });

        return createdPatient;
    }

    async signUpDoctor(signUpRequest: IDoctor): Promise<IDoctor | null> {
        this.doctorService = new DoctorService();

        const doctor = await this.doctorService.findByEmail(signUpRequest.email);

        if(doctor) {
            return null;
        }

        const hashedPassword = await bcrypt.hash(signUpRequest.password as string, 10);

        const createdPatient = await this.doctorService.saveDoctor({
            name: signUpRequest.name,
            email: signUpRequest.email,
            password: hashedPassword,
            organisation: signUpRequest.organisation,
            contact: signUpRequest.contact,
            specialization: signUpRequest.specialization
        });

        return createdPatient;
    }

    async signInPatient(signInRequest: IPatient): Promise<string | null> {
        const patient = await this.patientService.findByEmail(signInRequest.email);

        if(!patient) {
            return null;
        }

        const isPasswordValid = await bcrypt.compare(signInRequest.password as string, patient.password as string);

        if(isPasswordValid) {
            return this.jwtService.generateToken(patient.email, "Patient", patient.patientId);
        }

        return null;
    }

    async signInDoctor(signInRequest: IDoctor): Promise<string | null> {
        const doctor = await this.doctorService.findByEmail(signInRequest.email);

        if(!doctor) {
            return null;
        }

        const isPasswordValid = await bcrypt.compare(signInRequest.password as string, doctor.password as string);

        if(isPasswordValid) {
            return this.jwtService.generateToken(doctor.email, "Doctor", doctor.doctorId);
        }

        return null;
    }

    async getPatientByPatientId(patientId: string): Promise<PublicPatient | null> {
        const patient = await this.patientService.findByPatientId(patientId);
        if (!patient) {
            return null;
        }
        const patientObj = patient.toObject();
        const { _id, id, patientId: _, password, ...rest } = patientObj as IPatient;
        return rest as PublicPatient;
    }

    async getDoctorByDoctorId(doctorId: string): Promise<PublicDoctor | null> {
        const doctor = await this.doctorService.findByDoctorId(doctorId);
        if (!doctor) {
            return null;
        }
        const doctorObj = doctor.toObject();
        const { _id, id, doctorId: _, password, ...rest } = doctorObj as IDoctor;
        return rest as PublicDoctor;
    }
}