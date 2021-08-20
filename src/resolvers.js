const { v4 } = require("uuid")
const Animal = require('./model/Animal')
const MainCard = require('./model/MainCard')
const Category = require('./model/Category')
const resolvers = {
  Query: {
    mainCards: () => MainCard.find(),
    animal: async (parent, {slug}, context, info) => Animal.findOne({slug}),
    categories: async () => Category.find(),
    animals: async () => Animal.find(),
    category: async (parent, {slug}, context, info) => Category.findOne({slug}),
  },



  Mutation: {
    addAnimal: async (parent, {image, title, rating, price, description, slug, stock, onSale, category}, context, info) => {
      let newAnimal =  {id: v4(),image,title,rating,price,description, slug,stock,onSale, category}
      const animal = await Animal.create(newAnimal)
    
      return animal

     },
     mainCard: async (parent, args, context, info) => {
      const {title, image} = args.card
      const card = await MainCard.create({title, image})
      return card
  },
  category: async (parent, {id, image, category, slug}, context, info) => {
    const NewCategory = await Category.create({id, image, category, slug})
    return NewCategory

  }

}

}

module.exports = resolvers;
