export default interface IMovie {
    id?: number;
    title: string;
    sysnopsis: string;
    genre?: string;
    image?: string;
    url?: string;
    authorId?: number;
    rate?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
