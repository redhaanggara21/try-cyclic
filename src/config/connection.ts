import {Sequelize} from 'sequelize-typescript';
import {config} from 'dotenv';
import Reservation from "../models/Reservation";
import Work from "../models/Work";
import Store from "../models/Store";
import User from "../models/User";
import Customer from "../models/Customer";
import CustomerReservationList from "../models/CustomerReservationList";
import dotenv from 'dotenv';
import Movie from '../models/Movie';
import Authors from '../models/Author';
import Actors from '../models/Actor';
import MovieCategory from '../models/MovieCategory';

// const POSTGRES_URL = process.env.DATABASE_URL as unknown as string;
// const sequelize = new Sequelize(POSTGRES_URL);

const dirEnvironment = process.env.NODE_ENV === 'development' ? '.env' :  `.env.${process.env.NODE_ENV}`;
const env  = dotenv.config(
        { path: dirEnvironment }
    );
console.log("environment active rightnow: " + process.env.NODE_ENV);

const host: string | undefined = process.env.DB_HOST as unknown as string;
const username: string | undefined = process.env.DB_USER as unknown as string;
const password: string | undefined = process.env.DB_PASS as unknown as string;
const database: string | undefined = process.env.DB_NAME as unknown as string;
const port: any = process.env.DB_PORT;

const connection = new Sequelize({
    dialect: 'postgres',
    // dialectOptions: {
    //     ssl: {
    //         require: true,
    //         rejectUnauthorized: false
    //     }
    // },
    host: host,
    port: port,
    username: username,
    password: password,
    database: database,
    models: [
        User, 
        Store, 
        Work, 
        Reservation, 
        Customer, 
        CustomerReservationList,
        Movie,
        Authors,
        Actors,
        MovieCategory
    ],
    logging: false,
    define: {
        timestamps: true,
    }
})
console.log('Connected to database...');

export default connection;