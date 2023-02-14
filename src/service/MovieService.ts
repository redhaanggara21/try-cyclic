import IMovie from "../Interface/IMovie";
import IMovieRepo from "../Repository/IMovieRepo";
import Movie from "../models/Movie";
import sequelize from "sequelize/types/sequelize";
import { Transaction, Op } from "sequelize";
import elasticsearchClient from '../config/elasticsearch';
export default class MovieService implements IMovieRepo {

    public async getAll(): Promise<IMovie[]> {
        return await Movie.findAll();
    }

    async getById(id: number): Promise<Promise<IMovie> | any> {
        return await Movie.findOne( { where: { id: id } });
    }

    async create(movie: IMovie | any): Promise<IMovie | any> {
        return await Movie.create(movie);
    }

    update(id: number, movie: IMovie): Promise<IMovie | any> {
        return Movie.update( movie, { where: { id: id } } );
    }

    async delete(id: number | any): Promise<void> {
        await Movie.destroy({ where: { id: id } });
    }

    async getByTitle(title: string): Promise<IMovie | any> {
        return await Movie.findOne( { where: { id: 60 } } );
    }

    async getMovieSearch(search: String): Promise<IMovie | any> {

        // const result = await elasticsearchClient.search({
        //     index: 'movies',
        //     type: 'movies',
        //     q: search
        // });

        // const ids = result.hits.hits.map((item: any) => {
        //     return item?.id
        // });

        // console.log(ids);

        const movies = await Movie.findAll({where:{
            title: {
              [Op.like]:  '%' + search + '%'
            },
          }})

        return movies;
    }

    async getBestMoviePerAuthor(limit?: number | any): Promise<IMovie| any> {
        return await Movie.findAll({
            // group: "authorId",
            // attributes: {
            //     include: [
            //         [ sequelize.fn("MAX", sequelize.col("rate")), "rate"]
            //     ],
            //     exclude: ["rate"],
            // },
            // limit,
        });
    }

    // async updateAllTransaction(){
    //     new Promise<void>((resolve: Function, reject: Function) => {
    //         sequelize.transaction((t: Transaction) => {
    //         })
    //     })
    // }

}