const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(routes);

app.use(cors());

// importação e conexão com o db comentada pq ainda nao temos url dessa conexão;

mongoose.connect('mongodb+srv://wanderson:wanderson@hello-3xsolutions-wd6bw.mongodb.net/product?retryWrites=true&w=majority',{
	useNewUrlParser: true,	
	useUnifiedTopology: true,
});

app.listen(3000, ()=>{
	console.log('server is running in port 3000')
	});