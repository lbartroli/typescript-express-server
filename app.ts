
import * as express from 'express';
import { dbConfig, expressConfig, serverConfig } from './server/config';
import { dbConnection } from './server/db';
import { routerConfig } from './server/router';

const app = express();

// MONGO DB CONNECTION
dbConnection.connect(dbConfig.prod);

// SET EXPRESS CONFIGURATION
const env = process.argv[2] || 'development';
expressConfig.config(express, app, __dirname, env);

// CONFIG ROUTER
routerConfig.config(app);

// RUN SERVER
app.listen(serverConfig.dev.PORT, () => {console.log(`Server running on: ${serverConfig.dev.URL_FULL}`)});