import { Document } from "mongoose";
export interface IUser extends Document {
    _id: string | undefined;
    name?: string;
    last_name?: string;
    email?: string;
    password?: string;
    avatar?: string;
    available_hours?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
