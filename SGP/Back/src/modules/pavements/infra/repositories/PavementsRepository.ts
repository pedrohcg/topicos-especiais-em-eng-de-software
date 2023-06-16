import IPavementsRepository from "../../repositories/IPavementsRepository";
import ICreatePavementDTO from "../../../../modules/pavements/dtos/ICreatePavementDTO";
import mssqlConfig from '../../../../config/mssqlConfig';
import mssql from 'mssql'
import {MongoClient, ObjectId} from 'mongodb';


class PavementsRepository implements IPavementsRepository{
    private url: string;
    private dbName: string;
    private client: MongoClient;

    constructor(){
        this.url = 'mongodb://localhost:27017';
        this.dbName = 'SGP';
        this.client = new MongoClient(this.url);
    }

    public async create({ nome, cep, dtUltimaIntervencao, IGG, criticality}: ICreatePavementDTO) {
        await this.client.connect();

        const db = this.client.db(this.dbName);
        const collection = db.collection('Pavements')
       
        return await collection.insertOne({nome: nome, cep: cep, dtUltimaIntervencao: dtUltimaIntervencao, IGG: IGG, criticidade: criticality});
    }

    public async update(id: ObjectId, nome?: string, dtUltimaIntervencao?: Date, IGG?: number, criticality?: string) {
        await this.client.connect();

        const db = this.client.db(this.dbName);
        const collection = db.collection('Pavements')

        if(nome){
            await collection.updateOne({_id: id}, {$set: {nome: nome}});
        }

        if(dtUltimaIntervencao){
            await collection.updateOne({_id: id}, {$set: {dtUltimaIntervencao: dtUltimaIntervencao}});
        }

        if(IGG){
            await collection.updateOne({_id: id}, {$set: {IGG: IGG, criticidade: criticality},});
        }
    }

    public async delete(id: ObjectId){
        await this.client.connect();

        const db = this.client.db(this.dbName);
        const collection = db.collection('Pavements')

        await collection.deleteOne({_id: id})
    }

    public async findPavement(name: string, cep: string) {
        await this.client.connect();

        const db = this.client.db(this.dbName);
        const collection = db.collection('Pavements');
        
        const response = await collection.find({$and: [{nome: name}, {cep: cep}]}).toArray();

        return response[0]
    }

    public async findByFilter(){
        await this.client.connect();

        const db = this.client.db(this.dbName);
        const collection = db.collection('Pavements');
        
        const response = await collection.find().toArray();

        return response;
    }

    public async findById(id: ObjectId) {
        await this.client.connect();

        const db = this.client.db(this.dbName);
        const collection = db.collection('Pavements');

        const response = await collection.find({_id: id}).toArray();

        return response[0]
    }
}

export default PavementsRepository