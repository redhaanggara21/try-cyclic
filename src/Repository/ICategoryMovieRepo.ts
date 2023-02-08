import ICategoryMovie from "../Interface/ICategoryMovie";


export default interface ICategoryMovieRepo {

    getAll(): Promise<ICategoryMovie[]>;

    getById(id: number): Promise<ICategoryMovie> | any;

    create(category: ICategoryMovie): Promise<ICategoryMovie>;

    create_array(category: [ICategoryMovie] | any): Promise<[ICategoryMovie | any]>;
    
    update(id: number, category: ICategoryMovie): Promise<ICategoryMovie>;

    delete(id: number): Promise<void>;

    // getByTitle(title: string): Promise<ICategoryMovie | null>;
    
    // getBestMoviePerCategory(limit: number): Promise<ICategoryMovie> | any;
}