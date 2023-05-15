import { ObjectId } from "mongodb";

export default interface IPavementsRepository{
    create(name: string, cep: string, length: number): Promise<any>;
    findByName(name: string): Promise<any>;
    findByCep(cep: string): Promise<any>;
    findByLength(length: number): Promise<any>;
    findById(id: ObjectId): Promise<any>
    findAll(): Promise<any>;
    update(id: ObjectId, name:string, cep: string, length: number): Promise<any>;
    delete(id: ObjectId): Promise<any>;
}