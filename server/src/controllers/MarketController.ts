import { Request, Response } from 'express';
import knex from '../database/connection';

class MarketController {
    async create(request: Request, response: Response) {
        const {
            name,
            score,
            latitude,
            longitude,
            city,
            state
        } = request.body;
        await knex('market').insert({
            name,
            img: 'fake-image',
            score,
            latitude,
            longitude,
            city,
            state
        });

        return response.json({ sucess: true })
    };
    async list(request: Request, response: Response) {
        const result = await knex('market').select('*');

        return response.json(result)
    };
    async show(request: Request, response: Response) {
        const { search } = request.params;
        const result = await knex('market').where('name', 'like', `%${search}%`);
        return response.json(result);
    };
    async update(request: Request, response: Response) {
        const {
            id,
            name,
            img,
            score,
            latitude,
            longitude,
            city,
            state
        } = request.body;
        await knex('market')
            .where('id', id)
            .update({
                name,
                img,
                score,
                latitude,
                longitude,
                city,
                state
            });
        return response.json({ sucess: true });
    };
    async delete(request: Request, response: Response) {
        const { id } = request.body;
        await knex('market').where('id', id).del();

        return response.json({ sucess: true })
    };
}

export default MarketController;