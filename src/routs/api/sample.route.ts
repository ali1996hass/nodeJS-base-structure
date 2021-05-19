import * as express from "express";
import * as auth from '../../auth/authorization'
let router = express.Router();
import * as sampleController from "../../controller/sample.controller";

router.get('/', auth.isAuthorized, sampleController.getAllSamples);
router.get('/:id', auth.isAuthorized, sampleController.getSampleById);
router.post('/', auth.isAuthorized, sampleController.createSample);
router.put('/:id', auth.isAuthorized, sampleController.updateSample);
router.delete('/:id', auth.isAuthorized, sampleController.deleteSample);

export { router as sampleRoute }
