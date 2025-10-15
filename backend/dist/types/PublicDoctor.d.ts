import { IDoctor } from "../interface/IDoctor";
export type PublicDoctor = Omit<IDoctor, '_id' | 'id' | 'doctorId' | 'password'>;
//# sourceMappingURL=PublicDoctor.d.ts.map