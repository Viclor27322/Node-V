const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const VentaSchema= new Schema({
    fecha:{
        type:String,
        require:true
    },
    hora:{
        type:String,
        require:true
    },
    usuario:{
        type:Schema.Types.ObjectId,
        ref:"usuarios",
        require:true
    },
    productos:[{
        producto:{
            type:Schema.Types.ObjectId,
            ref:"productos",
            require:true
        },
        cantidad:{
            type:Number,
            require:true
        },
        total:Number
    }]
})