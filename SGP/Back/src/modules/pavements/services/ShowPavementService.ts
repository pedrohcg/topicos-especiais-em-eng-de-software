import {injectable, inject, container} from 'tsyringe';

import IPavementsRepository from '../repositories/IPavementsRepository';

@injectable()
class ShowPavementService{
    constructor(
        @inject('PavementsRepository')
        private pavementsRepository: IPavementsRepository,
    ){}

    public async execute(): Promise<JSON>{
        const pavement = await this.pavementsRepository.findByFilter();

        return pavement;
    }
}

export default ShowPavementService;