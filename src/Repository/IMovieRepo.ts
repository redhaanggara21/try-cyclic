import IMovie from "../Interface/IMovie";


export default interface IMovieRepo {

    getAll(): Promise<IMovie[]>;

    getById(id: number): Promise<IMovie> | any;

    create(movie: IMovie): Promise<IMovie>;

    update(id: number, movie: IMovie): Promise<IMovie>;

    delete(id: number): Promise<void>;

    getByTitle(title: string): Promise<IMovie | null>;
    
    getBestMoviePerAuthor(limit: number): Promise<IMovie> | any;
}