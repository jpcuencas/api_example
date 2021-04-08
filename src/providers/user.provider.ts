import { IUser } from './../models/user.model';
import User from './../schemas/user.schema'; 
class UserProvider {
    public async getAll() {
        try {
            return await User.find();
        } catch(error) {
            throw error;
        }
    }

    public async getOne(id: string) {
        try {
            return await User.findById(id).populate(this.getPopulate());
        } catch(error) {
            throw error;
        }
    }

    public async create(users: IUser) {
        try {
            return await new User(users).save();
        } catch(error) {
            throw error;
        }
    }

    public async update(id: string, user: IUser) {
        try {
            return await User.findByIdAndUpdate(
                id,
                {
                    $set: user
                }
            );
        } catch(error) {
            throw error;
        }
    }

    public async delete(id: string) {
        try {
            await User.findByIdAndRemove(id);
            return true;
        } catch(error) {
            throw error;
        }
    }

    private getPopulate() {
        return [
            {
                path: 'role',
                model: 'roles',
                select: 'name'
            }
        ]
    }
}

export const userProvider = new UserProvider();
