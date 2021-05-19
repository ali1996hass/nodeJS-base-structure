import { Request, Response } from 'express'
import * as mongoose from 'mongoose';
const sample = mongoose.model('Sample');
import { DAL } from '../models/_dal'



export const getAllSamples = (req: Request, res: Response) => {
    try {
        DAL.getAll(sample, req, res);
    } catch (error) {
        
    }
};

export const getSampleById = (req: Request, res: Response) => {
    try {
        DAL.getById(sample, req, res);

    } catch (error) {

    }
};

export const createSample = (req: Request, res: Response) => {
    try {
        let Sample: any = new sample();
        Sample.field1 = req.body.field1;
        Sample.field2 = req.body.field2;
        DAL.create(Sample, req, res);
    } catch (error) {

    }

};

export const updateSample = (req: Request, res: Response) => {
    try {
        DAL.update(sample, req, res);
    } catch (error) {

    }
};

export const deleteSample = (req: Request, res: Response) => {
    try {
        DAL.delete(sample, req, res);
    } catch (error) {

    }
};