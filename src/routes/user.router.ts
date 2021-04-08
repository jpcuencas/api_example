import { Router } from "express";
import { userController } from './../controllers/user.controller';
class UserRouter {
    public router: Router = Router();
    constructor() {
        this.config();
    }

    private config() {
        this.router.get('/get/all', userController.getAll);
        this.router.get('/get/one/:id', userController.getOne);
        this.router.post('/create', userController.create);
        this.router.put('/update/:id', userController.update);
        this.router.delete('/delete/:id', userController.delete);
    }
}

const userRouter = new UserRouter();
export default userRouter.router;