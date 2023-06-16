import { injectable, inject } from "tsyringe";
import IUsersRepository from '../repositories/IUsersRepository';
import {ObjectId} from 'mongodb';

interface IResponse{
    avatar: string;
    email: string;
    orcamento: number;
}

@injectable()
class ShowProfileService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
    ){}

    public async execute(id: ObjectId): Promise<IResponse>{
        const {avatar, email, password, orcamento}= await this.usersRepository.findById(id);

        return {avatar, email, orcamento};
    }
}

export default ShowProfileService;