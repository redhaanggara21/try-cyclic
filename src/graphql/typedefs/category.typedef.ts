import { buildSchema, GraphQLID, GraphQLInputObjectType, GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";

const categoryType = new GraphQLObjectType({
    name: "categoryMovie",
    fields: ({
      id: { type: GraphQLID },
      category_name: { type: GraphQLString },
      movieId: { type: GraphQLInt },
    })
})

const categoryInput = new GraphQLInputObjectType({
    name: "categoryMovieInput",
    fields: ({
        category_name: { type: GraphQLString }
        // movieId: { type: GraphQLInt },
    })
})


const categoryMutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      addCategory: {
        type: new GraphQLList(categoryType),
        args: {
          categoryArray: { type: GraphQLList(categoryInput) }
        },
        resolve(parent, { categoryArray }) {
          // This is where you should use your ORM/ODM or SQL to add or update 
          // your database with the array (i.e "citiesArray").
        }
      }
    }
  });


// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
    input categoryInput {
        category_name: String
        movieId: Int!
    }

    type categoryType {
        id: Int!
        category_name: String
        movieId: Int!
    }

    type Query {
        getCategory(id: ID!): categoryInput
    }
    
    type Mutation {
        createCategory(input: CategoryInput): Category
        updateCategory(id: ID!, input: CategoryInput): Category
    }

`);
export {
    categoryInput,
    categoryType,
    categoryMutation,
    schema
}