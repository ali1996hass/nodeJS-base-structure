import mongoose from 'mongoose';
const applications = mongoose.model('Applications');
import { Request, Response } from 'express'


exports.getAllApplications = (req: Request, res: Response) => {
    applications.find((err, doc) => {
        if (!err)
            res.json({
                applications: doc
            });
        else
            console.log(err);
    });

};

exports.getApplicationById = (req: Request, res: Response) => {
    applications.findById(req.params.id, (err: any, doc: any) => {
        if (!err)
            res.json({
                application: doc
            });
        else
            console.log(err);
    });

};

exports.createApplication = (req: Request, res: Response) => {
    let application: any = new applications();
    application.name = req.body.name;
    application.desc = req.body.desc;
    application.teplates = req.body.teplates;
    application.users = req.body.users;
    application.save((err: any, doc: any) => {
        if (!err)
            res.send('Application created');
    });

};

exports.updateApplication = (req: Request, res: Response) => {
    applications.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, doc) => {
        if (!err)
            res.send('Updates succesfully');
        else
            console.log(err);
    })

};

exports.deleteApplication = (req: Request, res: Response) => {
    applications.findOneAndDelete({ _id: req.params.id }, null, (err, doc) => {
        if (!err)
            res.json("application was deleted");
        else
            console.log(err);
    });

};