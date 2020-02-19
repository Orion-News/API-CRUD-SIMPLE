const express = require('express');
const routes = require('./src/routes');
const cors = require('cors');
const app = express();

app.use(routes);
app.use(express.json())
app.use(cors());

/*

importação e conexão com o db comentada pq ainda nao temos url dessa conexão;

const mongoose = require('mongoose');

mongoose.connect('String conection in DB',{
	useNewUrlParser: true,	
	useUnifiedTopology: true,
});
*/


app.listen(3000, ()=>{
	console.log('server is running in port 3000')
	});