import IAuthor from "../Interface/IAuthor";
import IAuthorRepo from "../Repository/IAuthorRepo";
import Author from "../models/Author";

export default class AuthorService implements IAuthorRepo {


    public async getAll(): Promise<IAuthor[]> {
        return await Author.findAll();
    }

    async getById(id: number): Promise<Promise<IAuthor> | any> {
        return await Author.findOne( { where: { id: id } });
    }

    async create(author: IAuthor | any): Promise<IAuthor> {
        return await Author.create(author);
    }

    update(id: number, author: IAuthor): Promise<IAuthor> | any {
        return Author.update( author, { where: { id: id } } );
    }

    async delete(id: number | any): Promise<void> {
        await Author.destroy({ where: { id: id } });
    }

    async getByName(name: string): Promise<IAuthor | any> {
        return await Author.findOne( { where: { name: name } } );
    }
}