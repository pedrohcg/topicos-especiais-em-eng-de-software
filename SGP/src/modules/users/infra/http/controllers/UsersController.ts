import { Request, Response } from "express";
import {container} from 'tsyringe';

import CreateUserService from '../../../services/CreateUserService';
import ShowProfileService from "../../../services/ShowProfileService";
import {ObjectId} from 'mongodb';

export default class UsersController{
    public async create(request: Request, response: Response): Promise<Response>{
        const {email, password} = request.body;

        const createUser = container.resolve(CreateUserService);

        await createUser.execute({email, password});

        return response.json('Usuario criado com sucesso.');
    }

    public async show(request: Request, response: Response): Promise<Response> {
        const id = new ObjectId(request.user.id);

        const showProfile = container.resolve(ShowProfileService);

        const user = await showProfile.execute(id);

        return response.json(user);
    }
}
