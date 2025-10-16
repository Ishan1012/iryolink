import { Request, Response } from "express";
export declare const giveConsent: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const grantConsent: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const revokeConsent: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getConsentById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getConsentByHash: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getConsentByPatientAddress: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getRevokedConsents: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getAllConsents: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=ConsentController.d.ts.map