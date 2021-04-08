import * as dotenv from 'dotenv';
class Configuration {
    constructor() {
        dotenv.config();
    }

    public getMongoURI(): string {
        return process.env.MONGODB_URI || 'mongodb://localhost:27017/test_db';
    }

    public getPort(): string | number {
        return process.env.PORT || 8080;
    }
}

const config = new Configuration();

export default config;
