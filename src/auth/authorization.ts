import { Request, Response } from 'express';

export const generateToken = (req: Request, next: any) => {

}
export const verifyToken = (req: Request, next: any) => {

}

export const isAuthorized = (req: Request, res: Response, next: any) => {
    next();
}