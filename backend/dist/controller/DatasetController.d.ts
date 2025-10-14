import { Request, Response } from "express";
export declare const createDataset: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getDataset: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getDatasetWithConsent: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getAllDatasets: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const findRecordsOfPatient: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const findRecordsOfDoctor: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=DatasetController.d.ts.map