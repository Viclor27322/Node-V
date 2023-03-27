const express = require('express');
const router = express.Router();
const VentaSchema = require('../models/venta');

//crear
router.post('/ventas',(req,res)=>{
    const {usuario,productos,cantidad,total}=req.body;
    try {
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
        productos:[ {
            producto:productos,
            cantidad:cantidad,
            total:total
        }  
        ]
      })
    venta
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));

} catch (error) {
    console.log(error);
    return res.status(500).json({error: 'Algo fallo en el servidor o la base de datos'})
}
})
router.get('/ventas', (req, res) => {
    VentaSchema.find()
      .then((data) => res.json(data))
      .catch((error) => {
        console.error(error);
        res.status(500).json({ message: 'Error al consultar las ventas' });
      });
  });


//consulta id
router.get('/ventas/:id',(req,res)=>{/// aun no se como hacerle xd
    const {id} = req.params;
    VentaSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});


//consulta id
router.get('/ventas/usuario/:id',(req,res)=>{/// aun no se como hacerle xd
    const {id} = req.params;
    VentaSchema
    .find({usuario: ObjectId(id)})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

module.exports = router;