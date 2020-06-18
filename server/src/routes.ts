import express from "express";
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
routes.get("/supermercado/:search", supermercadoController.show);
routes.put("/supermercado", supermercadoController.update);
routes.delete("/supermercado", supermercadoController.delete);

//Produtos
routes.post("/produto", produtoController.create);
routes.get("/produto", produtoController.list);
routes.get("/produto/:search", produtoController.show);
routes.put("/produto", produtoController.update);
routes.delete("/produto", produtoController.delete);

export default routes;
