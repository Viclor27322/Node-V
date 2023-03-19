const express = require('express');
const mongoose= require('mongoose');
require('dotenv').config();
const productoRoutes = require('./src/routes/producto');
const productosRoutes = require('./src/routes/productos');
const TerrRoutes = require('./src/routes/terrario');
const UserRoutes = require('./src/routes/users');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 9000;

//routes
app.get('/',(req,res)=>{
    res.send("Welcome to my A")
})

//midelware
app.use(express.json());
app.use('',productoRoutes);
app.use('',productosRoutes);
app.use('',TerrRoutes);
app.use('',UserRoutes);
app.use(cors({ "Access-Control-Allow-Origin" : "*" }));


///conexion
mongoose.connect(
    process.env.MONGODB_URI
).then(()=>console.log('Conected to MongoDB'))
.catch((error)=>console.error(error));


app.listen(port,()=>console.log('Server listen on port ', port));


//se intala, exprese, nodemon, mongoose, dotenv