import ICreateUserDTO from "../dtos/ICreateUserDTO";
import {ObjectId} from 'mongodb';

export default interface IUsersRepository{
    create(data: ICreateUserDTO);
    findByEmail(email?: String);
    findById(id: ObjectId);
}