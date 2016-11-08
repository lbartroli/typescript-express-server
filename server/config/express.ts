
import * as path from 'path';
import * as express from 'express';
import * as consolidate from 'consolidate';
import * as swig from 'swig';
import * as favicon from 'serve-favicon';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';

class ExpressConfig {
    config(express: any, app: express.Express, root: string, env: string) {
        app.engine('html', consolidate.swig);
        app.use(express.static(path.join(root, '/app/assets')));
        // app.use(favicon(path.join(root + '/app/assets/images/favicon.ico')));
        app.use(cookieParser());
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
        app.set('view engine', 'html');
        app.set('views', path.join(root, '/app/views'));
    }
}

export let expressConfig = new ExpressConfig;