import { Request, Response } from 'express';
import knex from '../database/connection';

class ProdutoController {
    async create(request: Request, response: Response) {
        const {
            nome,
            img,
            valor,
            inicio_promo,
            fim_promo,
            unidade_med,
            categoria_id,
            supermercado_id
        } = request.body;
        await knex('produto').insert({
            nome,
            img,
            valor,
            num_curtidas: 0,
            inicio_promo,
            fim_promo,
            unidade_med,
            categoria_id,
            supermercado_id
        });

        return response.json({ sucess: true })
    };
    async list(request: Request, response: Response) {
        const supermercado = await knex('produto').select('*');

        return response.json(supermercado)
    };
    async show(request: Request, response: Response) {
        const { search } = request.params;
        const busca = await knex('produto').where('nome', 'like', `%${search}%`);
        return response.json(busca)
    };
    async update(request: Request, response: Response) {
        const {
            id,
            nome,
            img,
            valor,
            inicio_promo,
            fim_promo,
            unidade_med,
            categoria_id,
            supermercado_id } = request.body;
        await knex('produto')
            .where('id', id)
            .update({
                nome,
                img,
                valor,
                inicio_promo,
                fim_promo,
                unidade_med,
                categoria_id,
                supermercado_id
            });
        return response.json({ sucess: true });
    };
    async delete(request: Request, response: Response) {
        const { id } = request.body;
        await knex('produto')
            .where('id', id)
            .del();
        return response.json({ sucess: true });
    };
}

export default ProdutoController;