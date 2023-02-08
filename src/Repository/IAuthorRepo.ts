import IAuthor from "../Interface/IAuthor";


export default interface IAuthorRepo {

    getAll(): Promise<IAuthor[]>;

    getById(id: number): Promise<IAuthor> | any;

    create(actors: IAuthor): Promise<IAuthor>;

    update(id: number, author: IAuthor): Promise<IAuthor>;

    delete(id: number): Promise<void>;

    getByName(name: string): Promise<IAuthor | null>;
}