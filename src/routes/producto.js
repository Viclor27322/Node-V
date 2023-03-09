const express = require('express');
const router = express.Router();
const ProdSchema= require('../models/producto');

//crear
router.post('/producto',(req,res)=>{
    const producto= ProdSchema(req.body);
    producto
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

//consultar
router.get('/producto',(req,res)=>{
    ProdSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

//consulta id
router.get('/producto/:id',(req,res)=>{
    const {id} = req.params;
    ProdSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

///actualizar
router.put('/producto/:id',(req,res)=>{
    const {id} = req.params;
    const {nombre,precio,existencia} = req.body;
    ProdSchema
    .updateOne({_id:id},{$set:{nombre,precio,existencia}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

//eliminar 
router.delete('/producto/:id',(req,res)=>{
    const {id} = req.params;
    ProdSchema.deleteOne({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});


module.exports = router;