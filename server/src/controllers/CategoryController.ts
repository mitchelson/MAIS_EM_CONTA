import { Request, Response } from 'express';
import knex from '../database/connection';

class CategoryController {
    // Create a new Category
    async create(request: Request, response: Response) {
        const { name, img } = request.body;
        await knex('category').insert({
            name, img
        });
        return response.json({ sucess: true });
    };
    // List all Categories
    async list(request: Request, response: Response) {
        const categories = await knex('category').select('*');
        const serializedCat = categories.map(category => {
            return {
                id: category.id,
                name: category.name,
                img_url: `http://localhost:3333/uploads/${category.img}`,
            };
        });

        return response.json(serializedCat);
    };
    // Search category by name
    async show(request: Request, response: Response) {
        const { search } = request.params;
        const result = await knex('category').where('name', 'like', `%${search}%`);
        return response.json(result);
    };
    // Update a Category
    async update(request: Request, response: Response) {
        const { id, name, img } = request.body;
        await knex('category')
            .where('id', id)
            .update({
                name,
                img
            });
        return response.json({ sucess: true });
    };
    // Deletar uma Categoria
    async delete(request: Request, response: Response) {
        const { id } = request.body;
        await knex('category')
            .where('id', id)
            .del();
        return response.json({ sucess: true });
    };
}

export default CategoryController;