const mongoose = require('mongoose');
const Schema = mongoose.Schema

const TerrSchema = new Schema({
    idTarjeta:{
        type: String,
        require:true
    },
    temperatura:{
        type:Number,
        require:true
    },
    humedad:{
        type:Number,
        require:true
    },
    nivel_ali:{
        type:Number,
        require:true
    },
    nivel_agua:{
        type:Number,
        require:true
    },
    intensidad:{
        type:Number,
        require:true
    },
    bomba:{
        type:Number,
        require:true
    },
    servomotor:{
        type:Number,
        require:true
    }
});

module.exports = mongoose.model('Terrario',TerrSchema);