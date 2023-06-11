import {injectable} from 'tsyringe';

@injectable()
class CalculateCriticalityService{
    constructor(){}

    public async execute(IGG: number): Promise<string>{
        if(IGG <= 20){
            return 'Otimo';
        } else if (IGG <=40){
            return 'Bom';
        } else if (IGG <= 80){
            return 'Regular';
        } else if (IGG <= 160){
            return 'Ruim';
        } else{
            return 'Pessimo';
        }
    }
}

export default CalculateCriticalityService;