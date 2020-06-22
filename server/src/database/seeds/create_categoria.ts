import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('category').insert([
        { name: 'Automotivo', img: "automotivo.svg" },
        { name: 'Açougue', img: "acougue.svg" },
        { name: 'Eletrônicos', img: "eletronic.svg" },
        { name: 'Enlatados', img: "enlatados.svg" },
        { name: 'Frios', img: "frios.svg" },
        { name: 'Grãos', img: "gros.svg" },
        { name: 'Higiene', img: "higiene.svg" },
        { name: 'Hortifruti', img: "hortifruti.svg" },
        { name: 'Laticíneos', img: "laticinios.svg" },
        { name: 'Limpeza', img: "limpeza.svg" },
        { name: 'Orgânicos', img: "oraganicos.svg" },
        { name: 'Padaria', img: "padaria.svg" },
        { name: 'PET', img: "pet.svg" },
        { name: 'Outros', img: "outros.svg" },
    ])
}