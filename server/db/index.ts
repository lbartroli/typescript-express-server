
import * as mongoose from 'mongoose';

interface IDbConnection {
    db: mongoose.Connection;
    connect(connectionString: string): void;
}

class DbConnection implements IDbConnection {
    db: mongoose.Connection;
    constructor() {
        this.db = mongoose.connection;
    }

    connect(connectionString: string): void {
        mongoose.connect(connectionString);
        (<any>mongoose).Promise = global.Promise;
        
        this.db.on('error', console.error.bind(console, 'db connection error:'));
        this.db.once('open', function() {
            console.log('mongo connection success!');
        });
    }
} 

export const dbConnection = new DbConnection();