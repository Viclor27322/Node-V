const express = require('express');
const router = express.Router();
const AyudaSchema = require('../models/ayuda')

//crear
router.post('/ayuda',(req,res)=>{
    const ayuda= AyudaSchema(req.body);
    ayuda
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

//consultar
router.get('/ayuda',(req,res)=>{
    AyudaSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

//consulta id
router.get('/ayuda/:id',(req,res)=>{/// aun no se como hacerle xd
    const {id} = req.params;
    AyudaSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

///actualizar
router.put('/ayuda/:id',(req,res)=>{
    const {id} = req.params;
    const {titulo,descripcion} = req.body;
    AyudaSchema
    .updateOne({_id:id},{$set:{titulo,descripcion}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

//eliminar 
router.delete('/ayuda/:id',(req,res)=>{
    const {id} = req.params;
    AyudaSchema.deleteOne({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

module.exports = router;