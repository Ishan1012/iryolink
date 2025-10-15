import { IDoctor } from "../interface/IDoctor";

export type PublicDoctor = Omit<IDoctor, '_id' | 'id' | 'doctorId' | 'password'>;