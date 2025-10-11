import mongoose, { Schema } from "mongoose";
import { IResult } from "../interface/IResult";
import { v4 as uuidv4 } from "uuid";

const resultSchema = new Schema<IResult> ({
    resultId: {
        type: String,
        default: "r:"+uuidv4,
        unique: true
    },
    riskScore: {
        type: Number,
        required: true,
        min: 0
    },
    predictedCondition: {
        type: String,
        required: true,
        minLength: 1
    },
    trandCategory: {
        type: String,
        required: true,
        minLength: 1
    },
    computedAt: {
        type: Date,
        default: Date.now
    },
    patientId: {
        type: Schema.Types.ObjectId,
        ref: 'Patient'
    },
    datasetId: {
        type: Schema.Types.ObjectId,
        ref: 'Dataset'
    }
});

export const Result = mongoose.model("Result", resultSchema);