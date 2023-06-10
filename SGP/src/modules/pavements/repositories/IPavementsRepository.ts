import ICreatePavementDTO from "../dtos/ICreatePavementDTO";
import {ObjectId} from 'mongodb';

export default interface IPavementsRepository{
    create({nome, cep, dtUltimaIntervencao, IGG, criticality}: ICreatePavementDTO);
    update(id: ObjectId, nome?: string, dtUltimaIntervencao?: Date, IGG?: number, criticality?: number);
    delete(id: ObjectId);
    findPavement(name: string, cep: string);
    findByFilter(filter: string);
    findById(id: ObjectId);
}