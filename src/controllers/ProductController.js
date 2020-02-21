const mongoose = require('mongoose');
require('../models/Product');
const Product = mongoose.model('Product');

class ProductController {

	// metodo index para todos os produtos no db;
	async Index(req, res){
	
		const { page = 1 } = req.query;		
				
		const product = await Product.paginate({}, { page, limit: 10});
		
		return res.json(product);
	}
	
	// metodo show para um produto especifico;
	async Show(req, res) {
	
		const { id } = req.params
	
		const product = await Product.findById(id);
		
		return res.json(product);
	}
	
	// metodo store para criar um novo produto;
	async Store(req, res){
	
		const insert = req.body;
		
		const product = await Product.create(insert);

		return res.json(product);
	}
	
	// metodo update para atualizar por id um produto;
	async Update(req, res){
	
		const { id } = req.params;
		
		const modificacoes = req.body;
		
		const product = await Product.findByIdAndUpdate(id, modificacoes, {
		new : true 
		});
		
		return res.json(product);
	}
	
	//metodo destroy deve deletar por id,
	async Destroy(req, res) {
		
		const { id } = req.params;
		
		await Product.findByIdAndRemove(id);
		
		return res.send({ 'Delete' : `Product com id: ${id}, foi Removido!`});
	}
}

module.exports = new ProductController();