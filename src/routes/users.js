const express = require('express');
const router = express.Router();
const UsersSchema = require('../models/users');

//crear
router.post('/users',(req,res)=>{
    const {nombre,nombreUsers,correo,contraseña,pregunta,clave}=req.body;

    const users=new UsersSchema({
        nombre:nombre,
        nombreUsers:nombreUsers,
        contraseña:contraseña,
        correo:correo,
        pregunta:pregunta,
        clave:clave,
        rol:'641f6a041bf4e7215b63d504'
    });
    users
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

//consultar
router.get('/users',(req,res)=>{
    UsersSchema
    .find()
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
    const {nombre,nombreUsers,contraseña,correo,pregunta,clave} = req.body;
    UsersSchema
    .updateOne({_id:id},{$set:{nombre,nombreUsers,contraseña,correo,pregunta,clave}})
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