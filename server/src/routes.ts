import express from "express";
import knex from "./database/connection";
import SupermercadoController from "./controllers/SupermercadoController";
import ProdutoController from "./controllers/ProdutoController";
import CategoriaController from "./controllers/CategoriaController";

const routes = express.Router();

const supermercadoController = new SupermercadoController();
const produtoController = new ProdutoController();
const categoriaController = new CategoriaController();

//Categorias
routes.post("/categoria", categoriaController.create);
routes.get("/categoria", categoriaController.list);
routes.get("/categoria/:search", categoriaController.show);
routes.put("/categoria", categoriaController.update);
routes.delete("/categoria", categoriaController.delete);

//Supermercados
routes.post("/supermercado", supermercadoController.create);
routes.get("/supermercado", supermercadoController.list);

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
