import {
    Column, 
    DataType, 
    IsDate, 
    IsUrl, 
    Length, 
    Model, 
    Table
} from "sequelize-typescript";
import IActor from "../Interface/IActor";

@Table({
    tableName: "actors",
    timestamps: true,
})
export default class Actor extends Model<Actor> implements IActor {

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
              msg: 'Please enter input a true value'
            }
        }
    })
    name!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        validate: {
            notNull: {
              msg: 'Please enter input a true value'
            },
            isIn: {
                args: [['male', 'female', 'other']],
                msg: "Must be English ex: male/female/other"
            }
        }
    })
    gender!: string;


    @Column({
        type: DataType.STRING,
        allowNull: false,
        validate: {
            validate: {
                notNull: {
                  msg: 'Please enter input a true value'
                }
            }
        }
    })
    image!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        validate: {
            notNull: {
              msg: 'Please enter input a true value'
            }
        }
    })
    country!: string;

    @Length({ min: 3, max: 250 })
    @Column({
        type: DataType.STRING,
        allowNull: false,
        validate: {
            notNull: {
              msg: 'Please enter input a true value'
            }
        }
    })
    information!: string;

    @IsUrl
    @Column({
        type: DataType.STRING,
        allowNull: false,
        validate: {
            notNull: {
              msg: 'Please enter input a true value'
            }
        }
    })
    url!: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        validate: {
            len: [130, 300],
            isInt: {
                msg: "Must be an integer number"
            },
            // customValidator(value: any) {
            //     console.log(value);
            //     throw new Error("wight must be between 130 - 400");
            // }
        }
    })
    height!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        validate: {
            len: [50, 200],
            customValidator(value: any) {
                throw new Error("wight must be between 50 - 200");
            }
        }
    })
    weight!: number;

    @IsDate
    @Column({
        type: DataType.DATE,
        allowNull: false,
        validate: {
            notNull: {
              msg: 'Please enter input a true value'
            }
        }
    })
    bird_date!: Date;
    
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