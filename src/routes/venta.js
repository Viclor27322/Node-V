const express = require('express');
const router = express.Router();
const VentaSchema = require('../models/venta');

//crear
router.post('/venta'),(req,res)=>{
    const {usuario,productos,cantidad,total}=req.body;

    const venta = new VentaSchema({
        fecha : "0-0-0",
        hora : "0-0-0",
        usuario, 
        productos:[ 
            productos,
            cantidad,
            total
        ]
      })
    venta
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
}

//consultar todas
router.get('/venta',(req,res)=>{
    VentaSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

//consulta id
router.get('/venta/:id',(req,res)=>{/// aun no se como hacerle xd
    const {id} = req.params;
    VentaSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

//consulta id
router.get('/venta/usuario/:id',(req,res)=>{/// aun no se como hacerle xd
    const {id} = req.params;
    VentaSchema
    .find({usuario: ObjectId(id)})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

module.exports = router;