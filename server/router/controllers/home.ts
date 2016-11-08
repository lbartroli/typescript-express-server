
import * as express from 'express';

import { StudentsModel } from '../../model';
import { IStudent } from '../../model/interfaces';

let router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index', { 
        title: 'TypeScript - HOME'
    });
});

export default router;