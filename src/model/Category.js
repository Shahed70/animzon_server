const {Schema, model} = require('mongoose')

const categorySchema= new Schema({
  id:String,
  image:String,
  category:String,
  slug:String
})


module.exports = model("Category", categorySchema)