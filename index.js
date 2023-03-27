const express = require('express');
const mongoose= require('mongoose');
require('dotenv').config();
const productosRoutes = require('./src/routes/productos');
const TerrRoutes = require('./src/routes/terrario');
const UserRoutes = require('./src/routes/users');
const AyudaRoutes = require('./src/routes/ayuda');
const CateRoutes = require('./src/routes/categoria');
const RolRoutes = require('./src/routes/rol');
const VentaRoutes = require('./src/routes/ventas');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 9000;

//routes
app.get('/',(req,res)=>{
    res.send("Welcome to my Api")
})

//midelware

app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
app.use(express.json());
app.use('/api',productosRoutes);
app.use('/api',TerrRoutes);
app.use('/api',UserRoutes);
app.use('/api',AyudaRoutes);
app.use('/api',CateRoutes);
app.use('/api',RolRoutes);
app.use('/api',VentaRoutes);

  
  
  
  


///conexion
mongoose.connect(
    process.env.MONGODB_URI
).then(()=>console.log('Conected to MongoDB'))
.catch((error)=>console.error(error));


app.listen(port,()=>console.log('Server listen on port ', port));


//se intala, exprese, nodemon, mongoose, dotenv