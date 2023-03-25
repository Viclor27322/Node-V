const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RolSchema= new Schema({
    rol:{
        type:String,
        require:true
    },
    descripcion:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model('Rol',RolSchema);