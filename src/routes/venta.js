const express = require('express');
const router = express.Router();
const VentaSchema = require('../models/venta');

//crear
router.post('/venta'),(req,res)=>{
    const {usuario,productos,existencia,total}=req.body;
    let fechaActualD = new Date();
    let dia = fechaActualD.getDate().toString().padStart(2, "0"); // Agrega un cero a la izquierda si el día tiene un solo dígito
    let mes = (fechaActualD.getMonth() + 1).toString().padStart(2, "0"); // Agrega un cero a la izquierda si el mes tiene un solo dígito
    let anio = fechaActualD.getFullYear().toString().slice(-2); // Toma los últimos dos dígitos del año

    let fechaFormateada = dia + "-" + mes + "-" + anio;

    let fechaActual = new Date();
    let hora = fechaActual.getHours().toString().padStart(2, "0"); // Agrega un cero a la izquierda si la hora tiene un solo dígito
    let minutos = fechaActual.getMinutes().toString().padStart(2, "0"); // Agrega un cero a la izquierda si los minutos tienen un solo dígito   

    let horaFormateada = hora + ":" + minutos;
    const venta = new VentaSchema({
        fecha : fechaFormateada,
        hora : horaFormateada,
        usuario, 
        productos:[ 
            productos,
            existencia,
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