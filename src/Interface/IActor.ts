export default interface IActor {
    id?: number;
    name: string;
    gender: string;
    image?: string;
    country?: string;
    information?: string;
    height?: number;
    weight?: number;
    bird_date?: Date;
    url?: string;
    createdAt: Date;
    updatedAt?: Date;
}
