import IPavementsRepository from './IPavementsRepository';
import {MongoClient, ObjectId} from 'mongodb';

class PavementsRepository implements IPavementsRepository{
    private url: string;
    private dbName: string;

    constructor(){
        this.url = 'mongodb://localhost:27017';
        this.dbName = 'Projeto2';
    }

    public async create(name: string, cep: string, length: number): Promise<any>{       
        const client = new MongoClient(this.url);

        await client.connect();
        
        const db = client.db(this.dbName);
        const collection = db.collection('pavement')
        return await collection.insertOne({pavement_name: name, pavement_cep: cep, pavement_length: length})
    }


    public async findByName(name: string): Promise<any>{
        const client = new MongoClient(this.url);

        await client.connect();

        const db = client.db(this.dbName);
        const collection = db.collection('pavement');

        return await collection.find({pavement_name: name}).toArray();
    }

    public async findByCep(cep: string): Promise<any>{
        const client = new MongoClient(this.url);

        await client.connect();

        const db = client.db(this.dbName);
        const collection = db.collection('pavement');

        return await collection.find({pavement_cep: cep}).toArray();
    }

    public async findByLength(length: number): Promise<any>{
        const client = new MongoClient(this.url);

        await client.connect();

        const db = client.db(this.dbName);
        const collection = db.collection('pavement');

        return await collection.find({pavement_length: length}).toArray();
    }

    public async findById(id: ObjectId): Promise<any>{
        const client = new MongoClient(this.url);

        await client.connect();

        const db = client.db(this.dbName);
        const collection = db.collection('pavement');

        return await collection.find({_id: id}).toArray();
    }

    public async findAll(): Promise<any> {
        const client = new MongoClient(this.url);

        await client.connect();

        const db = client.db(this.dbName);
        const collection = db.collection('pavement');

        return await collection.find({}).toArray();
    }

    public async update(id: ObjectId, name: string, cep: string, length: number){
        const client = new MongoClient(this.url);
        
        await client.connect();

        const db = client.db(this.dbName);
        const collection = db.collection('pavement');

        return await collection.updateOne({_id: id}, {$set: {pavement_name:name, pavement_cep: cep, pavement_length: length}})
    }

    public async delete(id: ObjectId): Promise<any>{
        const client = new MongoClient(this.url);
        
        await client.connect();

        const db = client.db(this.dbName);
        const collection = db.collection('pavement');

        return await collection.deleteOne({ _id: id})
    }

}

export default PavementsRepository;