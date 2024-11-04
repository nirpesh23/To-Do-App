import { Users } from "../models/users.model";
import UsersRepository from "../repositories/users.repository";
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';
import Result from '../../../core/result';

export default class UserService{
    
    static async createUser(request){
        try {
            if(request.password !== request.confirmPassword){

            }
            const password = await bcrypt.hash(request.password, 12);
            const user = new Users(uuidv4(), request.name, request.email, password);
            await UsersRepository.insert(user);
            const token = this.generateJwtToken(user);
            return Result.createSuccess(token);
        } catch (error) {
            Result.createErrorWithMessage(error.message, 'Error while creating user!')
        }
    }

    static generateJwtToken(user){
        const jwtSecret = process.env.JWT_SECRET ||  '5f94c01728ae8693e05d014dd0f5dcad0fa7c16295e9ae218b659e5a375d6e1d6481353f5684c8c2646ed92aff1a6e30f35770eb80403cc66bdbc87802017af011c807f2fb50983eee9a157e3923dd32570f79da32bebe7ddc6dfc80ea265374e1a8eb7eb28c2345dad1853d0723df76736b90d79ff78c0dbea251f0bbc0d595746bf422a7fdd8473bfbff733a7f7f689c72e8c343c5e7ecdf1e6e47911672ff8e194bea4cdd82518142f481293c804a096994ad1cdccda0ef0cb3f11eeeeecac5eb68e002759a88b35f66d4eac40c793d61c6380db789b54384e5481a979597130bbac0d71d8419ac602ac38b583d2fa6794b3be9216750ce78dc257e5fb485';
        const jwtExpiry = process.env.JWT_EXPIRES_IN || '10m'
        const token = jwt.sign({id: user.id}, jwtSecret, {expiresIn: process.env.JWT_EXPIRES_IN || '10m'});
        return token;
    }
}