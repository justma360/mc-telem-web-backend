import express, { Router } from 'express';
import sampleController from '../controllers/sampleController';

const router: Router = express.Router();

router.get('/test', sampleController.sample);

export default router;
