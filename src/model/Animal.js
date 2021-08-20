const {Schema, model} = require('mongoose')

const animalSchema = new Schema({
    image:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    rating:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    description:[String],
    stock:Number,
    onSale:Boolean,
    slug:String,
    category:String

})


module.exports = model('Animal', animalSchema)