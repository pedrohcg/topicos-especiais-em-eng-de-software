import PavementsRepository from '../repositories/PavementsRepository';
import AppError from '../errors/AppError'
import { ObjectId } from 'mongodb';

export default class GetPavementService{
    private pavementsRepository: PavementsRepository;

    constructor(pavementsRepository: PavementsRepository){
        this.pavementsRepository = pavementsRepository;
    }

    public async getByName(name: string){
        return await this.pavementsRepository.findByName(name);
    }

    public async getByCep(cep: string){
        return await this.pavementsRepository.findByCep(cep);
    }

    public async getByLength(length: number){
        return await this.pavementsRepository.findByLength(length);
    }

    public async getAll(){
        return await this.pavementsRepository.findAll();
    }
}