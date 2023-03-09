const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ProdSchema = new Schema({
    nombre:{
        type: String,
        require:true
    },
    precio:{
        type:Number,
        require:true
    },
    existencia:{
        type:Number,
        require:true
    }
});

module.exports = mongoose.model('Producto',ProdSchema);