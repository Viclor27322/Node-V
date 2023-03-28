const express = require('express');
const router = express.Router();
const ProdSchema= require('../models/productos');


//crear
router.post('/productos', async (req, res) => {
    try {
      const {
        nombre,
        descripcion,
        imagen,
        precio,
        sabor,
        presentacion,
        existencia,
        categoria,
      } = req.body;
  
      const producto = new ProdSchema({
        nombre,
        descripcion,
        imagen,
        precio,
        sabor,
        presentacion,
        existencia,
        categoria
      });
  
      await producto.save();
      res.json(producto);
    } catch (error) {
      console.log('Error al crear el producto', error);
      res.status(400).json({ message: error.message });
    }
  });

//consultar
router.get('/productos',(req,res)=>{
    ProdSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

//consulta id
router.get('/productos/:id',(req,res)=>{
    const {id} = req.params;
    ProdSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

///actualizar
router.put('/productos/:id',(req,res)=>{
    const {id} = req.params;
    const {nombre,descripcion,imagen,precio,sabor,presentacion,existencia,categoria} = req.body;
    ProdSchema
    .updateOne({_id:id},{$set:{nombre,descripcion,imagen,precio,sabor,presentacion,existencia,categoria}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});
router.put('/productos/actualizar/:id',(req,res)=>{
  const {id} = req.params;
  const {existencia} = req.body;
  ProdSchema
  .updateOne({_id:id},{$set:{existencia}})
  .then((data)=>res.json(data))
  .catch((error)=>res.json({message:error}));
});

//eliminar 
router.delete('/productos/:id',(req,res)=>{
    const {id} = req.params;
    ProdSchema.deleteOne({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});


module.exports = router;