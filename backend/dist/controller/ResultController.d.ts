import { Request, Response } from "express";
export declare const saveResult: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getResultById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getResultsOfDataset: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getResultsByTrends: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getResultsByPatientId: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getAllResults: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=ResultController.d.ts.map