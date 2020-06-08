import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('categoria').insert([
        { nome: 'Automotivo', img: "automotivo.svg" },
        { nome: 'Açougue', img: "acougue.svg" },
        { nome: 'Eletrônicos', img: "eletronic.svg" },
        { nome: 'Enlatados', img: "enlatados.svg" },
        { nome: 'Frios', img: "frios.svg" },
        { nome: 'Grãos', img: "gros.svg" },
        { nome: 'Higiene', img: "higiene.svg" },
        { nome: 'Hortifruti', img: "hortifruti.svg" },
        { nome: 'Laticíneos', img: "laticinios.svg" },
        { nome: 'Limpeza', img: "limpeza.svg" },
        { nome: 'Orgânicos', img: "oraganicos.svg" },
        { nome: 'Padaria', img: "padaria.svg" },
        { nome: 'PET', img: "pet.svg" },
        { nome: 'Outros', img: "outros.svg" },
    ])
}