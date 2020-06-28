import express from "express";
import MarketController from "./controllers/MarketController";
import ProductController from "./controllers/ProductController";
import CategoryController from "./controllers/CategoryController";

const routes = express.Router();

const marketController = new MarketController();
const productController = new ProductController();
const categoryController = new CategoryController();

//Categories
routes.post("/category", categoryController.create);
routes.get("/category", categoryController.list);
routes.get("/category/:search", categoryController.show);
routes.put("/category", categoryController.update);
routes.delete("/category", categoryController.delete);

//Markets
routes.post("/market", marketController.create);
routes.get("/market", marketController.list);
routes.get("/market/:search", marketController.show);
routes.put("/market", marketController.update);
routes.delete("/market", marketController.delete);

//Products
routes.post("/product", productController.create);
routes.get("/product", productController.list);
routes.get("/product/:search", productController.show);
routes.put("/product", productController.update);
routes.delete("/product", productController.delete);

export default routes;
