const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ProdSchema = new Schema({
    nombre:{
        type: String,
        require:true
    },
    descripcion:{
        type:String,
        require:true
    },
    imagen:{
        public_id:String,
        secure_url:String
    },
    precio:{
        type:Number,
        require:true
    },
    sabor:{
        type:String,
        require:true
    },
    presentacion:{
        type:String,
        require:true
    },
    existencia:{
        type:Number,
        require:true
    }
});
ProdSchema.methods.setImagen= function setImagen(filename){
    const puerto = process.env.APP_HOST
    this.imagen=`${puerto}/public/${filename}`
}

module.exports = mongoose.model('Productos',ProdSchema);