import cors from 'cors';
import express from 'express';
import {
    config
} from 'dotenv';
import bodyParser from 'body-parser';
import connection from "./config/connection";
import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from '@graphql-tools/schema';
import { ApolloServer, gql } from "apollo-server-express";
import schema from './graphql/graphql';
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const app = express();
const mobile = require("./routes/mobile");
const frontend = require("./routes/frontend");
const graphql = require("./routes/graphql");

const swaggerOptions: any = {
    swaggerDefinition: {
      info: {
        title: "User Apis",
        description: "Customer API Information",
        contact: {
          email:"pmandloi@deqode.com"
        },
        liscence:{
          name:"Apache 2.0",
          url: "http://apache.org/"
        },
        servers: ["http://localhost:8888"]
      },
    },
    apis: ["./src/app.ts"],
  };

  const swaggerDocs: any = swaggerJsDoc(swaggerOptions);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


if (!process.env.PORT) {
    console.log('Error to get Port')
    process.exit(1);
}

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());


// const server = new ApolloServer({
//     schema,
//     csrfPrevention: true,
//     cache: "bounded",
// });

app.use(bodyParser.json());
app.use('/mobile', mobile);
app.use('/frontend', mobile);
// app.use('/graphiql', );
app.use(
    '/graphiql',
    graphqlHTTP({
      schema,
      graphiql: true,
}));

const PORT = process.env.PORT || 3000;

//connect to database
connection.sync({alter: true}).then(() => {
        console.log('Database connected successfully');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
            // console.log(`🚀 Server ready at http://localhost:${PORT} - graphql: ${server.graphqlPath}`)
        })
    }
).catch(err => {
        console.log(err);
    }
);
