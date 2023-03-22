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
//login
router.post('/users/',(req,res)=>{
    const users= UsersSchema(req.params.nombreUsers);
    const correo= UsersSchema(req.params.correo);
    const contra= UsersSchema(req.params.electronico);
    UsersSchema.find({nombreUsers:users,contraseña:contra,correo:correo})
    .then((data)=>res.json("Usuario encontrado"))
    .catch((error)=>res.json("Usuario no encontrado"));
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
    const {nombre,nombreUsers,contraseña,correo} = req.body;
    UsersSchema
    .updateOne({_id:id},{$set:{nombre,nombreUsers,contraseña,correo}})
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