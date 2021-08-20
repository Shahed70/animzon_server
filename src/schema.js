const { gql } = require('apollo-server');

const typeDefs = gql`
  type MainCard {
        id:ID
        title:String
        image:String
  }
  type Animal {
      id: ID!
      image: String!
      title: String!
      rating: Float
      price: String!
      description: [String!]!
      slug: String!
      stock: Int!
      onSale: Boolean
      category: Category
  }

  type Category {
    id: ID!
    image: String!
    category: String!
    slug: String!
  }

  type Query {
    mainCards: [MainCard]
    animals: [Animal!]!
    animal(slug: String!): Animal
    categories: [Category]
    category(slug: String!): Category
  }

input cardType {
  title:String
  image:String
}
  type Mutation {
      addAnimal(
        image: String!
        title: String!
        rating: Float
        price: String!
        description: [String!]!
        slug: String!
        stock: Int!
        onSale: Boolean
        category: String!
      ): Animal

      removeAnimal(id: ID!): Boolean!
      mainCard(card:cardType):MainCard
      category(id:String, image:String, category:String, slug:String):Category
  }

`;

module.exports = typeDefs

