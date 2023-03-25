const express = require('express');
const router = express.Router();
const CateSchema = require('../models/categoria');

router.post('/categoria',(req,res)=>{
    const categoria= CateSchema(req.body);
    categoria
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

//consultar
router.get('/categoria',(req,res)=>{
    CateSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

//consulta id
router.get('/categoria/:id',(req,res)=>{/// aun no se como hacerle xd
    const {id} = req.params;
    CateSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

///actualizar
router.put('/categoria/:id',(req,res)=>{
    const {id} = req.params;
    const {presentacion,base,descripcion} = req.body;
    CateSchema
    .updateOne({_id:id},{$set:{presentacion,base,descripcion}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

//eliminar 
router.delete('/categoria/:id',(req,res)=>{
    const {id} = req.params;
    CateSchema.deleteOne({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

module.exports = router;