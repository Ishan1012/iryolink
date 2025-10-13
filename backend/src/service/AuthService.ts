import { JwtService } from "./JwtService";
import bcrypt from "bcrypt";
import { IPatient } from "../interface/IPatient";
import { PatientService } from "./PatientService";
import { DoctorService } from "./DoctorService";
import { IDoctor } from "../interface/IDoctor";

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

        const hashedPassword = await bcrypt.hash(signUpRequest.password, 10);

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

        const hashedPassword = await bcrypt.hash(signUpRequest.password, 10);

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

        const isPasswordValid = await bcrypt.compare(signInRequest.password, patient.password);

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

        const isPasswordValid = await bcrypt.compare(signInRequest.password, doctor.password);

        if(isPasswordValid) {
            return this.jwtService.generateToken(doctor.email, "Doctor", doctor.doctorId);
        }

        return null;
    }
}