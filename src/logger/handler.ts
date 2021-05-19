import { Request, Response } from 'express'


export const handler = {
    logErr: (err: any) => {
        console.log(err);
    },
    handleRes: (res: Response, status: any, statusMsg: any, data: any[]) => {
        res.send({
            message: statusMsg,
            totalRecords: data.length,
            type: status,
            data: data
        });
    },
    handleErr: (res: Response, err: any, status: any) => {
        handler.logErr(err);
        res.status(status).json(
            {
                type: 'error',
                message: err.message.split(',')[0],
                messageAr: err.message.split(',')[1],
                error: err.errorType
            }
        );
    },
};