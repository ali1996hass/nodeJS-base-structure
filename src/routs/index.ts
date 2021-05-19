import * as express from "express";
import { sampleRoute } from "./api/sample.route";

const router = express.Router();

router.use('/sample', sampleRoute);

export { router as indexRoute };
