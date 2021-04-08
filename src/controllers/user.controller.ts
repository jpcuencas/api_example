import { Response, Request } from 'express';
import { userRepository } from './../repositories/user.repository';
import { ResponseMessage } from '../tools/response';
class UserController {
    public async getAll(req: Request, res: Response) {
        try {
            const items = await userRepository.getAll();
            res.send(ResponseMessage.Success(items));
        } catch(error) {
            res.send(ResponseMessage.Error(error));
        }
    }

    public async getOne(req: Request, res: Response) {
        try {
            const item = await userRepository.getOne(req.params.id);
            res.send(ResponseMessage.Success(item));
        } catch(error) {
            res.send(ResponseMessage.Error(error));
        }
    }

    public async create(req: Request, res: Response) {
        try {
            const item = await userRepository.create(req.body);
            res.send(ResponseMessage.Success(item));
        } catch(error) {
            res.send(ResponseMessage.Error(error));
        }
    }

    public async update(req: Request, res: Response) {
        try {
            const item = await userRepository.update(req.params.id, req.body);
            res.send(ResponseMessage.Success(item));
        } catch(error) {
            res.send(ResponseMessage.Error(error));
        }
    }

    public async delete(req: Request, res: Response) {
        try {
            await userRepository.delete(req.params.id);
            res.send(ResponseMessage.Success());
        } catch(error) {
            res.send(ResponseMessage.Error(error));
        }
    }
}

export const userController = new UserController();
