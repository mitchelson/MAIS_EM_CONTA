import { Request, Response } from 'express';
import knex from '../database/connection';

class SupermercadoController {
    async create(request: Request, response: Response) {
        const {
            nome,
            nota,
            latitude,
            longitude,
            cidade,
            uf
        } = request.body;
        await knex('supermercado').insert({
            nome,
            img: 'image-fake',
            nota,
            latitude,
            longitude,
            cidade,
            uf
        });

        return response.json({ sucess: true })
    };
    async list(request: Request, response: Response) {
        const supermercado = await knex('supermercado').select('*');

        return response.json(supermercado)
    };
}

export default SupermercadoController;