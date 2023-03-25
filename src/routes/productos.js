const express = require('express');
const router = express.Router();
const ProdSchema= require('../models/productos');
const uploadImage = require('../cloudinary/cloudinary');
const multer = require('multer');

const upload = multer({ dest: '../img/' });
//crear
router.post('/productos', upload.single('imagen'), async (req, res) => {
    try {
      const {
        nombre,
        descripcion,
        precio,
        sabor,
        presentacion,
        existencia,
      } = req.body;
  
      const producto = new ProdSchema({
        nombre,
        descripcion,
        precio,
        sabor,
        presentacion,
        imagen: {
            public_id: '',
            secure_url: ''
          }
        });
  /* 
      if (req.files?.imagen) {
        const rs = await uploadImage(req.files.imagen.tempFilePath);
        producto.imagen = {
          public_id: rs.public_id,
          secure_url: rs.secure_url,
        };
        fs.unlink(req.files.imagen.tempFilePath);
      } */
      if (req.file) {
        const result = await uploadImage(req.file.path);
        producto.imagen = {
          public_id: result.public_id,
          secure_url: result.secure_url
        };
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
    const {nombre,descripcion,imagen,precio,sabor,presentacion,existencia} = req.body;
    ProdSchema
    .updateOne({_id:id},{$set:{nombre,descripcion,imagen,precio,sabor,presentacion,existencia}})
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