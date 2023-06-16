import IUsersRepository from "../../../users/repositories/IUsersRepository";
import ICreateUserDTO from "../../../../modules/users/dtos/ICreateUserDTO";
import {MongoClient, ObjectId} from 'mongodb';


class UsersRepository implements IUsersRepository{
    private url: string;
    private dbName: string;
    private client: MongoClient;

    constructor(){
        this.url = 'mongodb://localhost:27017';
        this.dbName = 'SGP';
        this.client = new MongoClient(this.url);
    }

    public async create(newUser: ICreateUserDTO){
        await this.client.connect();

        const db = this.client.db(this.dbName);
        const collection = db.collection('Users');

        return await collection.insertOne({email: newUser.email, password: newUser.password});
    }

    public async findByEmail(email?: string) {
        await this.client.connect();

        const db = this.client.db(this.dbName);
        const collection = db.collection('Users');
        
        const response = await collection.find({email: email}).toArray();

        return response[0]
    }

    public async findById(id: ObjectId) {
        await this.client.connect();

        const db = this.client.db(this.dbName);
        const collection = db.collection('Users');

        const response = await collection.find({_id: id}).toArray();

        return response[0]
    }
}

export default UsersRepository