const express = require('express');
const router = express.Router();
const ProdSchema= require('../models/productos');
const uploadImage = require('../cloudinary/cloudinary');


//crear
router.post('/productos', async (req, res) => {
    try {
      const {
        nombre,
        descripcion,
        precio,
        sabor,
        presentacion,
        existencia,
        categoria
      } = req.body;
  
      const producto = new ProdSchema({
        nombre,
        descripcion,
        precio,
        sabor,
        presentacion,
        existencia,
        categoria
      });
  
      if (req.files?.imagen) {
        const rs = await uploadImage(req.files.imagen.tempFilePath);
        producto.imagen = {
          public_id: rs.public_id,
          secure_url: rs.secure_url,
        };
        fs.unlink(req.files.imagen.tempFilePath);
      }
  
      await producto.save();
      res.json(producto);
    } catch (error) {
      console.log('Error al crear el producto', error);
      res.status(400).json({ message: error.message });
    }
  });

//consultar
router.get('/productos',(req,res)=>{
    ProdSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

//consulta id
router.get('/productos/:id',(req,res)=>{
    const {id} = req.params;
    ProdSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

///actualizar
router.put('/productos/:id',(req,res)=>{
    const {id} = req.params;
    const {nombre,descripcion,imagen,precio,sabor,presentacion,existencia,categoria} = req.body;
    ProdSchema
    .updateOne({_id:id},{$set:{nombre,descripcion,imagen,precio,sabor,presentacion,existencia,categoria}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

//eliminar 
router.delete('/productos/:id',(req,res)=>{
    const {id} = req.params;
    ProdSchema.deleteOne({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});


module.exports = router;