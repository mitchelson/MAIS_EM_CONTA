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
        try {
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

        } catch (error) {
            return response.json({ message: "I can't register the new product!" })
        }
    };
    async list(request: Request, response: Response) {
        try {
            const result = await knex('product').select('*');
            return response.json(result);
        } catch (error) {
            return response.json({ message: "I can't listening products" });
        }
    };
    async show(request: Request, response: Response) {
        const { search } = request.params;
        try {
            const result = await knex('product').where('name', 'like', `%${search}%`);
            return response.json(result)
        } catch (error) {
            return response.status(400).json({ message: "Error" })
        }
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
        try {
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
        } catch (error) {
            return response.status(400).json({ message: "I can't update!" });
        }
    };
    async delete(request: Request, response: Response) {
        const { id } = request.body;
        try {
            await knex('product')
                .where('id', id)
                .del();
            return response.json({ sucess: true });
        } catch (error) {
            return response.json({ message: "I can't delete product!" });
        }
    };
}

export default ProductController;