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
    res.send("Welcome to my Api")
})

//midelware
app.use(express.json());
app.use(cors());
app.use(cors({
    origin: '*'
  }));
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
  
app.use('/api',productoRoutes);
app.use('/api',productosRoutes);
app.use('/api',TerrRoutes);
app.use('/api',UserRoutes);

  
  
  
  


///conexion
mongoose.connect(
    process.env.MONGODB_URI
).then(()=>console.log('Conected to MongoDB'))
.catch((error)=>console.error(error));


app.listen(port,()=>console.log('Server listen on port ', port));


//se intala, exprese, nodemon, mongoose, dotenv