import { makeExecutableSchema } from "@graphql-tools/schema";
import { gql } from "apollo-server-express";
import { GraphQLSchema } from "graphql";
const authorSchema: GraphQLSchema = makeExecutableSchema({

    typeDefs: gql`

        type Author {
            id: Int!,
            name: String!,
            gender: String!,
            image: String!,
            country: String!,
            information: String!,
            url: String!
        }

        type Query {
            getAuthor(id: Int): Author
            getAuthorList: [Author!]
        }

        type Mutation {
            createAuthor(
                name: String, 
                gender: String, 
                image: String,
                country: String,
                information: String,
                url: String  
            ): Author

            updateAuthor(
                id: Int,
                name: String, 
                gender: String, 
                image: String,
                country: String,
                information: String,
                url: String  
            ): Author

            deleteAuthor(
                id: Int
            ): Author
        }
    `,
});

export default authorSchema;