const {Schema, model} = require('mongoose')

const cardSchema= new Schema({
    title:String,
    image:String
})


module.exports = model("MainCard", cardSchema)