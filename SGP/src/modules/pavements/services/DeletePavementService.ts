import {injectable, inject, container} from 'tsyringe';

import IPavementsRepository from '../repositories/IPavementsRepository';

import { ObjectId } from 'mongodb';

@injectable()
class DeletePavementService{
    constructor(
        @inject('PavementsRepository')
        private pavementsRepository: IPavementsRepository,
    ){}

    public async execute(id: ObjectId){
        await this.pavementsRepository.delete(id);
    }
}

export default DeletePavementService;