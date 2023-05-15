import PavementsRepository from '../repositories/PavementsRepository';
import { ObjectId } from 'mongodb';

export default class UpdatePavementService{
    private pavementsRepository: PavementsRepository;

    constructor(pavementsRepository: PavementsRepository){
        this.pavementsRepository = pavementsRepository;
    }

    public async update(id: ObjectId, name: string, cep: string, length: number){
        const pavement = await this.pavementsRepository.findById(id);

        if(typeof name === 'undefined'){
            name = pavement[0].pavement_name;
        }

        if(typeof cep === 'undefined'){
            cep = pavement[0].pavement_cep;
        }

        if(typeof length === 'undefined'){
            length = pavement[0].pavement_length;
        }
        
        return await this.pavementsRepository.update(id, name, cep, length)
    }
}