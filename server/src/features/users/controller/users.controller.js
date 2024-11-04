import { express } from 'express';
import UserService from '../services/users.service';

const UsersController = express.Router();

UsersController.post('/users/register', async (req, res)=>{
    try {
        const response = await UserService.createUser(req.body);
        res.send(response);
    } catch (error) {
        res.send(error)
    }
})