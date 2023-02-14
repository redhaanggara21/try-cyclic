import { makeExecutableSchema } from "@graphql-tools/schema";
import { gql } from "apollo-server-express";
import { GraphQLSchema } from "graphql";
// import { categoryInput } from "../typedefs/category.typedef";


const movieSchema: GraphQLSchema = makeExecutableSchema({
  typeDefs: gql`

    type CategoryInput {
      id: Int!
      category_name: String!
      movieId: Int!
    }

    type Movie {
      id: Int!
      title: String!,
      sysnopsis: String!,
      genre: String!,
      image: String!,
      url: String!,
      authorId: Int!,
      rate: Int!,
    }

    type Query {
      getMovie(id: Int): Movie
      getMovieList: [Movie!]
      getMovieSearch(search: String): [Movie!]
      getBestMoviePerAuthor(limit: Int): [Movie!]
    }

    type Mutation {
      createMovie(
        title: String!,
        sysnopsis: String!,
        genre: String!,
        image: String!,
        url: String!,
        authorId: Int!,
        rate: Int!,
        category: [String!],
      ): Movie

      updateMovie(
        id: Int,
        title: String!,
        sysnopsis: String!,
        genre: String!,
        image: String!,
        url: String!,
        authorId: Int!,
        rate: Int!,
      ): Movie

      deleteMovie(
          id: Int
      ): Movie
    }
  `,
});

export default movieSchema;