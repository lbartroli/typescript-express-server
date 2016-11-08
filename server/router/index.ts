
import * as express from 'express';
import * as path from 'path';
import homeController from './controllers/home';
import studentsController from './controllers/students';

let router = express.Router();

//middleware to log all requests
router.use(function(req, res, next) {
	console.log(req.method, req.url);
	return next();
});

class RouterConfig {
    config(app: express.Express) {
        app.use(router);
	    app.use(homeController);
	    app.use(studentsController);

        app.use((req, res, next) => {
            return res.status(404).render('404');
        });

        app.use((err: express.ErrorRequestHandler, req: express.Request, res: express.Response, next: express.NextFunction) => {
            console.log(err);
            return res.status(500).render('500');
        });
    }
}

export const routerConfig = new RouterConfig();