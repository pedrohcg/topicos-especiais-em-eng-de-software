import PavementsRepository from '../repositories/PavementsRepository';
import AppError from '../errors/AppError'

interface IRequest{
    name: string;
    cep: string;
    length: number;
}

export default class CreatePavementService{
    private pavementsRepository: PavementsRepository;

    constructor(pavementsRepository: PavementsRepository){
        this.pavementsRepository = pavementsRepository;
    }

    public async create({name, cep, length}: IRequest){
        if(length < 0){
            throw new AppError('Tamanho do pavimento nao pode ser menor que 0.', 404); 
        }

        if(cep.length == 8){
            return await this.pavementsRepository.create(name, cep, length);
        }
        else{
            throw new AppError('Cep Incorreto.', 404);
        }

    }
}