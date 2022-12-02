const express = require("express");
const routes = express.Router();
const productscontroller = require("../controller/controller");

routes.get("/", (req, res) => res.send(`<h2>brasil hexa!!!</h2>`));

routes.get("/listingProducts", controller.listingProducts);
routes.get("/listingProducts/:id", controller.listingChooseProduct);
routes.delete("/deleteProducts/:id", controller.deleteProducts);
routes.post("/postingProducts", controller.postingProducts);
routes.put("/updatingProducts", controller.updatingProducts);
module.exports = routes;