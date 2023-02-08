import { mergeSchemas } from "@graphql-tools/schema";
import { GraphQLSchema } from "graphql";
import resolvers from "./resolvers/resolvers";
import schemas from "./schemas/schema";

const schema: GraphQLSchema = mergeSchemas({
    schemas,
    resolvers,
});

export default schema;