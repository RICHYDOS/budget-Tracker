import {
  Model,
  type InferAttributes,
  type InferCreationAttributes,
  type CreationOptional,
  DataTypes
} from 'sequelize'
import { sequelize } from '../database/sequelize'

export class User extends Model<
InferAttributes<User>,
InferCreationAttributes<User, { omit: 'id' }>
> {
  declare id: CreationOptional<number>
  declare username: string
  declare email: string
  declare password: string
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.CHAR(60),
      allowNull: false
    }
  },
  {
    sequelize
  }
)
