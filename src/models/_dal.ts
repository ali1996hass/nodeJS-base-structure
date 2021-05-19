import { handler } from "../logger/handler";
import { Request, Response } from "express";
import { HttpStatusCode } from "../common/enums/httpStatuses.enum";

export const DAL =
{
    getAll: (collection: any, req: Request, res: Response) => {
        try {
            collection.find((err: any, doc: any) => {
                if (!err)
                    handler.handleRes(res, 'SUCCESS', "SUCCESS", doc);
                else
                    handler.handleErr(res, err, HttpStatusCode.INTERNAL_SERVER_ERROR);
            });
        } catch (error) {
            handler.handleErr(res, error, HttpStatusCode.INTERNAL_SERVER_ERROR);
        }


    },
    getById: (collection: any, req: Request, res: Response) => {
        try {
            collection.findById(req.params.id, (err: any, doc: any) => {
                if (!err)
                    if (doc)
                        res.json({
                            data: doc
                        });
                    else
                        handler.handleErr(res, { message: 'Not found' }, HttpStatusCode.NOT_FOUND);
                else
                    handler.handleErr(res, err, HttpStatusCode.INTERNAL_SERVER_ERROR);
            });
        } catch (error) {
            handler.handleErr(res, error, HttpStatusCode.INTERNAL_SERVER_ERROR);
            throw new Error(error);

        }

    },
    getByCondition: (collection: any, condition: any, req: Request, res: Response) => {
        try {
            collection.find({ assetTemplateId: req.params.id }, (err: any, doc: any) => {
                if (!err)
                    if (doc)
                        res.json({
                            data: doc
                        });
                    else
                        handler.handleErr(res, { message: 'Not found' }, 404);
                else
                    handler.handleErr(res, err, HttpStatusCode.INTERNAL_SERVER_ERROR);
            });
        } catch (error) {
            handler.handleErr(res, error, HttpStatusCode.INTERNAL_SERVER_ERROR);
        }
    },
    create: (collection: any, req: Request, res: Response) => {
        try {
            collection.save((err: any, doc: any) => {
                if (!err)
                    handler.handleRes(res, 'SUCCESS', "SUCCESS", doc);
                else
                    handler.handleErr(res, err, HttpStatusCode.INTERNAL_SERVER_ERROR);
            })
        } catch (error) {
            handler.handleErr(res, error, HttpStatusCode.INTERNAL_SERVER_ERROR);
        }
    },
    update: (collection: any, req: Request, res: Response) => {
        try {
            collection.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err: any, doc: any) => {
                if (!err)
                    handler.handleRes(res, 'SUCCESS', "SUCCESS", doc);
                else
                    handler.handleErr(res, err, HttpStatusCode.INTERNAL_SERVER_ERROR);
            });
        } catch (error) {
            handler.handleErr(res, error, HttpStatusCode.INTERNAL_SERVER_ERROR);
        }
    },
    delete: (collection: any, req: Request, res: Response) => {
        try {
            collection.findOneAndDelete({ _id: req.params.id }, null, (err: any, doc: any) => {
                if (!err)
                    handler.handleRes(res, 'SUCCESS', "SUCCESS", doc);
                else
                    handler.handleErr(res, err, HttpStatusCode.INTERNAL_SERVER_ERROR);
            });
        } catch (error) {
            handler.handleErr(res, error, HttpStatusCode.INTERNAL_SERVER_ERROR);
        }
    }
}