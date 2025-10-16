import { Request, Response } from "express";
export declare const saveLog: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getLogById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getLogsByDoctorId: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getLogsOnDate: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const updateLogStatus: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getAllLogs: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=LogController.d.ts.map