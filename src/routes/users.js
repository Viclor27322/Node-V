const express = require('express');
const router = express.Router();
const UsersSchema = require('../models/users');

//crear
router.post('/users',(req,res)=>{
    const users= UsersSchema(req.body);
    users
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

//consultar
router.get('/users',(req,res)=>{
    UsersSchema
    .find().populate("rols")
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

//consulta id
router.get('/users/:id',(req,res)=>{/// aun no se como hacerle xd
    const {id} = req.params;
    UsersSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

///actualizar
router.put('/users/:id',(req,res)=>{
    const {id} = req.params;
    const {nombre,nombreUsers,contraseña,correo,pregunta,clave,rol} = req.body;
    UsersSchema
    .updateOne({_id:id},{$set:{nombre,nombreUsers,contraseña,correo,pregunta,clave,rol}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

//eliminar 
router.delete('/users/:id',(req,res)=>{
    const {id} = req.params;
    UsersSchema.deleteOne({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

module.exports = router;