import express, { response, request } from "express";
import knex from "./database/connection";

const routes = express.Router();
//Categorias
routes.post("/categoria", async (request, response) => {
  const { nome, img } = request.body;
  await knex('categoria').insert({
    nome, img
  });
  return response.json({ sucess: true })
});
routes.get("/categoria", async (request, response) => {
  const categorias = await knex('categoria').select('*');
  const serializedCat = categorias.map(categoria => {
    return {
      id: categoria.id,
      nome: categoria.nome,
      img_url: `http://localhost:3333/uploads/${categoria.img}`,
    };
  })

  return response.json(serializedCat);
});
//Supermercados
routes.post("/supermercado", async (request, response) => {
  const {
    nome,
    nota,
    latitude,
    longitude,
    cidade,
    uf
  } = request.body;
  await knex('supermercado').insert({
    nome,
    img: 'image-fake',
    nota,
    latitude,
    longitude,
    cidade,
    uf
  });

  return response.json({ sucess: true })
});
routes.get("/supermercado", async (request, response) => {
  const supermercado = await knex('supermercado').select('*');

  return response.json(supermercado)
});
//Produtos
routes.post("/produto", async (request, response) => {
  const {
    nome,
    valor,
    inicio_promo,
    fim_promo,
    num_curtidas,
    unidade_med,
    categoria_id,
    supermercado_id
  } = request.body;
  await knex('produto').insert({
    nome,
    valor,
    inicio_promo,
    fim_promo,
    num_curtidas,
    unidade_med,
    categoria_id,
    supermercado_id,
    img: "image-fake"
  });

  return response.json({ sucess: true })
})
routes.get("/produto", async (request, response) => {
  const produto = await knex('produto').select('*');

  return response.json(produto);
})
export default routes;
