import Knex from 'knex';

export async function seed(knex: Knex) {
    knex('categoria').insert([
        { nome: 'Automotivo', img: '' },
        { nome: 'Açougue', img: '' },
        { nome: 'Eletrônicos', img: '' },
        { nome: 'Enlatados', img: '' },
        { nome: 'Frios', img: '' },
        { nome: 'Grãos', img: '' },
        { nome: 'Higiene', img: '' },
        { nome: 'Hortifruti', img: '' },
        { nome: 'Laticíneos', img: '' },
        { nome: 'Limpeza', img: '' },
        { nome: 'Orgânicos', img: '' },
        { nome: 'Padaria', img: '' },
        { nome: 'PET', img: '' },
        { nome: 'Outros', img: '' },
    ])
}