import express from 'express' ;
import googleController from '../controllers/google.controller.js';

const router = express.Router() ;

router.post("/google", googleController) ;

export default router ;