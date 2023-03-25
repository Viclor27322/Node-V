const express = require('express');
const router = express.Router();
const RolSchema = require('../models/rol');

//crear
router.post('/rol',(req,res)=>{
    const rol= RolSchema(req.body);
    rol
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

//consultar
router.get('/rol',(req,res)=>{
    RolSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

//consulta id
router.get('/rol/:id',(req,res)=>{/// aun no se como hacerle xd
    const {id} = req.params;
    RolSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

///actualizar
router.put('/rol/:id',(req,res)=>{
    const {id} = req.params;
    const {rol,descripcion} = req.body;
    RolSchema
    .updateOne({_id:id},{$set:{rol,descripcion}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

//eliminar 
router.delete('/rol/:id',(req,res)=>{
    const {id} = req.params;
    RolSchema.deleteOne({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

module.exports = router;