import {
    AllowNull, 
    Column, 
    DataType, 
    ForeignKey, 
    Model, 
    NotEmpty, 
    Table
} from "sequelize-typescript";
import IMovie from "../Interface/IMovie";

@Table({
    tableName: "movies",
    timestamps: true,
})
export default class Movie extends Model<Movie> implements IMovie {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    id!: number;

    // @AllowNull(false)
    // @NotEmpty
    @Column({
        type: DataType.STRING,
        allowNull: false,
        // validate: {
        //     notNull: {
        //       msg: 'Please enter input a true value'
        //     }
        // }
    })
    title!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        // validate: {
        //     notNull: {
        //       msg: 'Please enter input a true value'
        //     }
        // }
    })
    sysnopsis!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        // unique: true,
        // validate: {
        //     validate: {
        //         notNull: {
        //           msg: 'Please enter input a true value'
        //         }
        //     }
        // }
    })
    genre!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        // validate: {
        //     validate: {
        //         notNull: {
        //           msg: 'Please enter input a true value'
        //         }
        //     }
        // }
    })
    image!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        // validate: {
        //     notNull: {
        //       msg: 'Please enter input a true value'
        //     }
        // }
    })
    url!: string;


    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        // validate: {
        //     notNull: {
        //       msg: 'Please enter input a true value'
        //     }
        // }
    })
    authorId!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        // validate: {
        //     notNull: {
        //       msg: 'Please enter input a true value'
        //     }
        // }
    })
    rate!: number;

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