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
    async show(request: Request, response: Response) {
        const { search } = request.params;
        const busca = await knex('supermercado').where('nome', 'like', `%${search}%`);
        return response.json(busca);
    };
    async update(request: Request, response: Response) {
        const { id,
            nome,
            img,
            nota,
            latitude,
            longitude,
            cidade,
            uf
        } = request.body;
        await knex('supermercado')
            .where('id', id)
            .update({
                nome,
                img,
                nota,
                latitude,
                longitude,
                cidade,
                uf
            });
        return response.json({ sucess: true });
    };
    async delete(request: Request, response: Response) {
        const { id } = request.body;
        await knex('supermercado').where('id', id).del();

        return response.json({ sucess: true })
    };
}

export default SupermercadoController;