import {
  Model,
  type InferAttributes,
  type InferCreationAttributes,
  type CreationOptional,
  DataTypes
} from 'sequelize'
import { sequelize } from '../database/sequelize'

class Example extends Model<
InferAttributes<Example>,
InferCreationAttributes<Example, { omit: 'id' }>
> {
  declare id: CreationOptional<number>
  declare username: string
  declare email: string
}

Example.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  },
  {
    sequelize
  }
)
