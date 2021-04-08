import { connect } from 'mongoose';
import * as dotenv from 'dotenv';
import config from './config';

class MongoConnection {
    constructor() {
        dotenv.config();
        this.setConnection();
    }

    private async setConnection() {
        try {
            await connect(
                config.getMongoURI(),
                {
                    useNewUrlParser: true,
                    useCreateIndex: true,
                    useFindAndModify: false
                }
            );
            console.log('Database connected');
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }
}

const mongoConnection = new MongoConnection();
export default mongoConnection;
