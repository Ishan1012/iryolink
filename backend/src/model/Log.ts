import mongoose, { Schema } from "mongoose";
import { ILog } from "../interface/ILog";
import { v4 as uuidv4 } from "uuid";

const logSchema = new Schema<ILog>({
    logId: {
        type: String,
        default: "l:"+uuidv4,
        unique: true
    },
    doctorId: {
        type: Schema.Types.ObjectId, 
        ref: 'Doctor'
    },
    action: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        default: "IN_PROGRESS"
    },
    datasetId: {
        type: Schema.Types.ObjectId,
        ref: 'Dataset'
    }
});

export const Log = mongoose.model("Log", logSchema);