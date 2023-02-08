import {
    Column, 
    DataType, 
    Model, 
    Table
} from "sequelize-typescript";
import ICategoryMovie from "../Interface/ICategoryMovie";

@Table({
    tableName: "movie_categorys",
    timestamps: true,
})
export default class MovieCategory extends Model<MovieCategory> implements ICategoryMovie {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    category_name!: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    movieId!: number;

    @Column({
        type: DataType.DATE,
        allowNull: true,
    })
    createdAt!: Date;

    @Column({
        type: DataType.DATE,
        allowNull: true,
    })
    updatedAt!: Date;
}