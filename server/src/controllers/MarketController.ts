import { Request, Response } from 'express';
import knex from '../database/connection';

class MarketController {
    async create(request: Request, response: Response) {
        const {
            responsible,
            company,
            score,
            img,
            email,
            password,
            latitude,
            longitude,
            street,
            district,
            cep,
            number,
            city,
            state
        } = request.body;

        try {
            await knex('market').insert({
                responsible,
                company,
                score,
                img,
                email,
                password,
                latitude,
                longitude,
                street,
                district,
                cep,
                number,
                city,
                state
            });
            return response.json({ sucess: true })
        } catch (error) {
            return response.json({ message: "Sorry, but i can't register this market" });
        }
    }
    async list(request: Request, response: Response) {
        try {
            const result = await knex('market').select('*');
            if (result > []) {
                return response.json(result);
            } else {
                return response.status(400).json({ message: "I didn't find anything" });
            }

        } catch (error) {
            return response.status(400).json({ message: "I can't list markets bro!" })
        }
    };
    async show(request: Request, response: Response) {
        const { search } = request.params;
        try {
            const result = await knex('market').where('company', 'like', `%${search}%`);
            if (result > []) {
                return response.json(result);
            } else {
                return response.status(400).json({
                    message: "There's nothing to see here!"
                });
            }
        } catch (error) {
            return response.json({ message: "I can't search!" });
        }
    };
    async update(request: Request, response: Response) {
        const {
            id,
            responsible,
            company,
            score,
            img,
            email,
            password,
            latitude,
            longitude,
            street,
            district,
            cep,
            number,
            city,
            state
        } = request.body;
        try {
            await knex('market')
                .where('id', id)
                .update({
                    responsible,
                    company,
                    score,
                    img,
                    email,
                    password,
                    latitude,
                    longitude,
                    street,
                    district,
                    cep,
                    number,
                    city,
                    state
                });
            return response.json({ sucess: true });
        } catch (error) {
            return response.status(400).json({ message: "Don't update bro!" });
        }
    };
    async delete(request: Request, response: Response) {
        const { id } = request.body;
        try {
            await knex('market').where('id', id).del();
            return response.json({ sucess: true })
        } catch (error) {
            return response.status(400).json({ message: "Don't delete man!" })
        }
    };
}

export default MarketController;