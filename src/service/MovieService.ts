import IMovie from "../Interface/IMovie";
import IMovieRepo from "../Repository/IMovieRepo";
import Movie from "../models/Movie";
import sequelize from "sequelize/types/sequelize";
import { Transaction } from "sequelize";

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
        return await Movie.findOne( { where: { title: title } } );
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