const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

// test in postman
routes.get('/', (req, res) =>{
    return res.json({ Message : 'Hello 3Xsolutions ' })
});

// list product in db total;
routes.get('/products', ProductController.Index);

// create product in db;
routes.post('/create/products', ProductController.Store);

// show me one product;
routes.get('/products/:id', ProductController.Show);

// update from id;
routes.put('/products/:id', ProductController.Update);

// delete from id;
routes.delete('/products/:id', ProductController.Destroy);


module.exports = routes;