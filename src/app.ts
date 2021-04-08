import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import mongoConnection from './config/database';
import config from './config/config';
import userRouter from './routes/user.router';

class Server {
    public app: Application;
    
    constructor() {
        mongoConnection;
        this.app = express();
        this.config();
        this.routes();
    }

    private config() {
        this.app.set('port', config.getPort());
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    private routes() {
        this.app.use('/user', userRouter);
    }

    public start() {
        this.app.listen(
            this.app.get('port'), () => {
                console.log(`Server on port: ${this.app.get('port')}`);
            }
        );
    }
}

const server = new Server();

server.start();