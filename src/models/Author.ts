import {
    Column, 
    DataType, 
    Model, 
    Table
} from "sequelize-typescript";
import IAuthor from "../Interface/IAuthor";

@Table({
    tableName: "authors",
    timestamps: true,
})
export default class Author extends Model<Author> implements IAuthor {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        // validate: {
        //     notNull: {
        //       msg: 'Please enter input a true value'
        //     }
        // }
    })
    name!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        // validate: {
        //     notNull: {
        //       msg: 'Please enter input a true value'
        //     }
        // }
    })
    gender!: string;

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
    country!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        // validate: {
        //     notNull: {
        //       msg: 'Please enter input a true value'
        //     }
        // }
    })
    information!: string;

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