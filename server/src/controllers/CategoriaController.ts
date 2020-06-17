import { Request, Response } from 'express';
import knex from '../database/connection';

class CategoriaController {
    // Criar uma nova Categoria
    async create(request: Request, response: Response) {
        const { nome, img } = request.body;
        await knex('categoria').insert({
            nome, img
        });
        return response.json({ sucess: true })
    };
    // Listar as Categorias existentes
    async list(request: Request, response: Response) {
        const categorias = await knex('categoria').select('*');
        const serializedCat = categorias.map(categoria => {
            return {
                id: categoria.id,
                nome: categoria.nome,
                img_url: `http://localhost:3333/uploads/${categoria.img}`,
            };
        });

        return response.json(serializedCat);
    };
    // Buscar uma Categoria pelo nome
    async show(request: Request, response: Response) {
        const { search } = request.params;
        const busca = await knex('categoria').where('nome', 'like', `%${search}%`);
        return response.json(busca)
    };
    // Atualizar uma Categoria
    async update(request: Request, response: Response) {
        const { id, nome, img } = request.body;
        await knex('categoria')
            .where('id', id)
            .update({
                nome,
                img
            });
        return response.json({ sucess: true });
    };
    // Deletar uma Categoria
    async delete(request: Request, response: Response) {
        const { id } = request.body;
        await knex('categoria')
            .where('id', id)
            .del();
        return response.json({ sucess: true });
    };
}

export default CategoriaController;