import {Request, Response} from 'express';
import {container} from 'tsyringe';

import AuthenticateUserService from '../../../services/AuthenticateUserService';

export default class LoginController{
    public async create(request: Request, response: Response): Promise<Response>{
        const {email, password} = request.body;

        const authenticateUser = container.resolve(AuthenticateUserService);

        const token = await authenticateUser.execute({email, password});

        return response.json({ token });
    }
}