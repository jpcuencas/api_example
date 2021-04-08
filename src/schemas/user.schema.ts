import { Schema, model } from 'mongoose';
import { IUser } from '../models/user.model';
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    last_name: {
        type: String,
        required: true,
        trim: true
    },
    nif_nie: {
        type: String,
        trim: true
    },
    cif: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    avatar: {
        type: String,
        requiredd: false,
        trim: true
    },
    available_hours: {
        type: Number,
        default: 1
    },
    last_login: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

const User = model<IUser>('users', userSchema);

export default User;
