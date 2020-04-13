const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);


// importação e conexão com o db comentada pq ainda nao temos url dessa conexão;

mongoose.connect('mongodb+srv://wanderson:wanderson@hello-3xsolutions-wd6bw.mongodb.net/product?retryWrites=true&w=majority',{
	useNewUrlParser: true,	
	useUnifiedTopology: true,
});

const port = process.env.PORT || 3030;

app.listen(port, ()=>{
	console.log(`server is running in port: ${port}`);
	});
