
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
        app.set('view engine', 'html');
        app.use(favicon(root + '/app/assets/images/favicon.ico'));
        app.use(cookieParser());
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
        app.set('views', path.join(root, '/app/views'));
        app.use(express.static(path.join(root, '/app/assets')));
    }
}

export let expressConfig = new ExpressConfig;