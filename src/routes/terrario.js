const express = require('express');
const router = express.Router();
const TerrSchema= require('../models/terrario');

//crear
router.post('/terrario',(req,res)=>{
    const terrario= TerrSchema(req.body);
    terrario
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

//consultar
router.get('/terrario',(req,res)=>{
    TerrSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

//consulta id
router.get('/terrario/:id',(req,res)=>{/// aun no se como hacerle xd
    const {id} = req.params;
    TerrSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

///actualizar
router.put('/terrario/:id',(req,res)=>{
    const {id} = req.params;
    const {temperatura,humedad,nivel_ali,nivel_agua,intensidad,bomba,servomotor} = req.body;
    TerrSchema
    .updateOne({idTarjeta:id},{$set:{temperatura,humedad,nivel_ali,nivel_agua,intensidad,bomba,servomotor}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

//eliminar 
router.delete('/terrario/:id',(req,res)=>{
    const {id} = req.params;
    TerrSchema.deleteOne({idTarjeta:id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

module.exports = router;