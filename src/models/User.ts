import {Column, DataType, Model, Table} from "sequelize-typescript";
import IUser from "../Interface/IUser";

@Table({
    tableName: "users",
    timestamps: true,
})
export default class User extends Model<User> implements IUser {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [5,10],
                msg: "Name must be atleast 3 characters in length"
            },
            notNull: {
              msg: 'Please enter input a true value'
            }
        }
    })
    first_name!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    last_name!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: {
                args: [6, 128],
                msg: "Email address must be between 6 and 128 characters in length"
            },
            isEmail: {
                msg: "Email address must be valid"
            }
        }
    })
    email!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [5, 10],
                msg: "password length"
            },
        }
        
    })
    password!: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    phone!: number;

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