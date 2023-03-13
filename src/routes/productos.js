const express = require('express');
const router = express.Router();
const ProdSchema= require('../models/productos');

//crear
router.post('/productos',(req,res)=>{
    const producto= ProdSchema(req.body);
    producto
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
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
    const {nombre,descripcion,precio,sabor,presentacion,existencia} = req.body;
    ProdSchema
    .updateOne({_id:id},{$set:{nombre,descripcion,precio,sabor,presentacion,existencia}})
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