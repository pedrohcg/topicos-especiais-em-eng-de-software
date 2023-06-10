import { Request, Response } from "express";
import {container} from 'tsyringe';

import CreatePavementService from '../../../services/CreatePavementService';
import ShowPavementService from '../../../services/ShowPavementService';
import UpdatePavementService from "../../../services/UpdatePavementService";
import DeletePavementService from "../../../services/DeletePavementService";

import mongoose from 'mongoose';


export default class PavementsController{
    public async create(request: Request, response: Response): Promise<Response>{
        const {nome, cep, dtUltimaIntervencao, IGG} = request.body;

        const createPavement = container.resolve(CreatePavementService);

        await createPavement.execute({nome, cep, dtUltimaIntervencao, IGG});

        return response.json('Pavimento cadastrado com sucesso.');
    }

    public async show(request: Request, response: Response): Promise<Response>{
        const filter = request.params.filter;

        const getPavement = container.resolve(ShowPavementService);

        const result = await getPavement.execute(filter);

        return response.send(result);
    }

    public async update(request: Request, response: Response): Promise<Response>{
        const id = new mongoose.Types.ObjectId(request.params.id);

        const {nome, dtUltimaIntervencao, IGG} = request.body;

        const updatePavement = container.resolve(UpdatePavementService);

        await updatePavement.execute({id, nome, dtUltimaIntervencao, IGG});

        return response.json('Dados do pavimento atualizados.');
    }

    public async delete(request: Request, response: Response): Promise<Response>{
        const id = new mongoose.Types.ObjectId(request.params.id);

        const deletePavement = container.resolve(DeletePavementService);

        await deletePavement.execute(id)

        return response.json('Pavimento deletado com sucesso.')
    }
}