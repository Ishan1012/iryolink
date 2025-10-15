import { IPatient } from "../interface/IPatient";

export type PublicPatient = Omit<IPatient, '_id' | 'id' | 'patientId' | 'password'>;