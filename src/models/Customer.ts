import {Column, DataType, Model, Table} from "sequelize-typescript";
import ICustomer from "../Interface/ICustomer";

@Table({
    tableName: "customers",
    timestamps: true,
})
export default class Customer extends Model<Customer> implements ICustomer {
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
            notNull: {
                msg: 'Please enter your field'
            }
        }
    })
    first_name!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter your name'
            }
        }
    })
    last_name!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    })
    username!: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
        unique: true,
        validate: {
            // isEmail: {
            //     msg: "username address must be valid"
            // }
        }
    })
    email!: string;
    @Column({
        type: DataType.STRING,
        allowNull: false,
        validate: {
            len: [5, 25]
        }
    })
    password!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        validate: {
          isEmail: {
            msg: "Must be an True Number",
          },
        },
    })
    phone!: string;

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

