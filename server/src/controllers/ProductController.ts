import { Request, Response } from 'express';
import knex from '../database/connection';

class ProductController {
    async create(request: Request, response: Response) {
        const {
            name,
            img,
            value,
            start_promo,
            end_promo,
            unity,
            id_category,
            id_market
        } = request.body;
        await knex('product').insert({
            name,
            img,
            value,
            like: 0,
            start_promo,
            end_promo,
            unity,
            available: true,
            id_category,
            id_market
        });

        return response.json({ sucess: true })
    };
    async list(request: Request, response: Response) {
        const result = await knex('product').select('*');
        return response.json(result);
    };
    async show(request: Request, response: Response) {
        const { search } = request.params;
        const result = await knex('product').where('name', 'like', `%${search}%`);
        return response.json(result)
    };
    async update(request: Request, response: Response) {
        const {
            id,
            name,
            img,
            value,
            start_promo,
            end_promo,
            unity,
            id_category,
            id_market } = request.body;
        await knex('product')
            .where('id', id)
            .update({
                name,
                img,
                value,
                start_promo,
                end_promo,
                unity,
                available: true,
                id_category,
                id_market
            });
        return response.json({ sucess: true });
    };
    async delete(request: Request, response: Response) {
        const { id } = request.body;
        await knex('product')
            .where('id', id)
            .del();
        return response.json({ sucess: true });
    };
}

export default ProductController;