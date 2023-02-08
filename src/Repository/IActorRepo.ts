import IActors from "../Interface/IActor";


export default interface IActorRepo {

    getAll(): Promise<IActors[]>;

    getById(id: number): Promise<IActors> | any;

    create(actors: IActors): Promise<IActors>;

    update(id: number, movie: IActors): Promise<IActors>;

    delete(id: number): Promise<void>;

    getByName(name: string): Promise<IActors | null>;
}