const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AyudaSchema = new Schema({
    titulo:{
        type:String,
        require:true
    },
    descripcion:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model('Ayuda',AyudaSchema);