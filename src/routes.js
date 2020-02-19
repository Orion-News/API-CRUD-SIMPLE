const express = require(express');
const routes = express.Router();

const ProductController = require('../controller/ProductController');

routes.get('/products', ProductController.Index);
routes.post('/products', ProductController.Store);

routes.get('/products/:id', ProductController.Show);
routes.put('/products/:id', ProductController.Update);
routes.delete('/products/:id', ProductController.Destroy);


module.exports = routes;