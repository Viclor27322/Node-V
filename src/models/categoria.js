const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CateSchema= new Schema({
    endulzante:{
        type:String,
        require:true
    },
    base:{
        type:String,
        require:true
    },
    descripcion:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model('Categoria',CateSchema);