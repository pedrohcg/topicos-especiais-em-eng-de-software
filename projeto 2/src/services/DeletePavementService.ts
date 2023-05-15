import PavementsRepository from '../repositories/PavementsRepository';
import { ObjectId } from 'mongodb';

export default class DeletePavementService{
    private pavementsRepository: PavementsRepository;

    constructor(pavementsRepository: PavementsRepository){
        this.pavementsRepository = pavementsRepository;
    }
    public async delete(id: ObjectId){
        return await this.pavementsRepository.delete(id);
    }
}