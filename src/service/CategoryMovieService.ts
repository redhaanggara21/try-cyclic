import ICategoryMovie from "../Interface/ICategoryMovie";
import ICategoryMovieRepo from "../Repository/ICategoryMovieRepo";
import MovieCategory from "../models/MovieCategory";

export default class CategoryMovieService implements ICategoryMovieRepo {


    public async getAll(): Promise<ICategoryMovie[]> {
        return await MovieCategory.findAll();
    }

    async getById(id: number): Promise<Promise<ICategoryMovie> | any> {
        return await MovieCategory.findOne( { where: { id: id } });
    }

    async create(category: ICategoryMovie | any): Promise<ICategoryMovie> {
        return await MovieCategory.create(category);
    }

    async create_array(category: [ICategoryMovie] | any): Promise<[ICategoryMovie] | any> {
        // console.log(category);
        const [instance, created] = await MovieCategory.bulkCreate(category, {returning: true});
        // console.log(instance);
        // console.log(created);
        return instance;
    }

    update(id: number, category: ICategoryMovie): Promise<ICategoryMovie> | any {
        return MovieCategory.update( category, { where: { id: id } } );
    }

    async delete(id: number | any): Promise<void> {
        await MovieCategory.destroy({ where: { id: id } });
    }

    async getByName(category_name: string): Promise<ICategoryMovie | any> {
        return await MovieCategory.findOne( { where: { category_name: category_name } } );
    }
}