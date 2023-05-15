import {Request, Response, Router} from 'express';
import bodyParser from 'body-parser';
import PavementsRepository from '../repositories/PavementsRepository';
import CreatePavementService from '../services/CreatePavementService';
import DeletePavementService from '../services/DeletePavementService';
import UpdatePavementService from '../services/UpdatePavementService';
import GetPavementService from '../services/GetPavementService'
import mongoose from 'mongoose';
import { ObjectId } from 'mongodb';

const jsonParser = bodyParser.json();
const pavementRouter = Router();

//criar pavimento
pavementRouter.post('/', jsonParser, async(req: Request, res: Response): Promise<Response> => {
    const name = req.body.name;
    const cep = req.body.cep;
    const length = req.body.length;

    const pavementRepository = new PavementsRepository();

    const createPavement = new CreatePavementService(pavementRepository);

    const result = await createPavement.create({name, cep, length});

    return res.json(result)
});

pavementRouter.get('/find/name', async (req: Request, res: Response): Promise<any> => {
    const name = req.body.name;

    const pavementRepository = new PavementsRepository();

    const getPavement = new GetPavementService(pavementRepository);

    const result = await getPavement.getByName(name);

    return res.json(result)
})

pavementRouter.get('/find/cep', async (req: Request, res: Response): Promise<any> => {
    const cep = req.body.cep;

    const pavementRepository = new PavementsRepository();

    const getPavement = new GetPavementService(pavementRepository);

    const result = await getPavement.getByCep(cep);
   
    return res.json(result)
})

pavementRouter.get('/find/length', async (req: Request, res: Response): Promise<any> => {
    const length = req.body.length;

    const pavementRepository = new PavementsRepository();

    const getPavement = new GetPavementService(pavementRepository);

    const result = await getPavement.getByLength(length);

    return res.json(result)
})

pavementRouter.get('/find/all', async (req: Request, res: Response): Promise<any> => {
    const pavementRepository = new PavementsRepository();

    const getPavement = new GetPavementService(pavementRepository);

    const result = await getPavement.getAll();

    return res.json(result)
})

pavementRouter.patch('/update', async (req: Request, res: Response): Promise<any> => {
    const id = new mongoose.Types.ObjectId(req.body.id);
    const name = req.body.name;
    const cep = req.body.cep;
    const length = req.body.length;

    const pavementRepository = new PavementsRepository();

    const updatePavement = new UpdatePavementService(pavementRepository);

    const result = await updatePavement.update(id, name, cep, length);

    return res.json(result)
})

pavementRouter.delete('/delete', async (req: Request, res: Response): Promise<any> => {
    const id = new mongoose.Types.ObjectId(req.body.id) 

    const pavementRepository = new PavementsRepository();

    const deletePavement = new DeletePavementService(pavementRepository);

    const result = await deletePavement.delete(id);

    return res.json(result)
})

export default pavementRouter