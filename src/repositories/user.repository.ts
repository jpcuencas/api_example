import { IUser } from './../models/user.model';
import { userProvider } from './../providers/user.provider';
class UserRepository {
    public async getAll() {
        try {
            return await userProvider.getAll();
        } catch(error) {
            throw error;
        }
    }

    public async getOne(id: string) {
        try {
            return await userProvider.getOne(id);
        } catch(error) {
            throw error;
        }
    }

    public async create(users: any) {
        try {
            return await userProvider.create(users);
        } catch(error) {
            throw error;
        }
    }

    public async update(id: string, user: IUser) {
        try {
            return await userProvider.update(id, user);
        } catch(error) {
            throw error;
        }
    }

    public async delete(id: string) {
        try {
            await userProvider.delete(id);
            return true;
        } catch(error) {
            throw error;
        }
    }
}

export const userRepository = new UserRepository();