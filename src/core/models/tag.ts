import {
  Model,
  type InferAttributes,
  type InferCreationAttributes,
  type CreationOptional,
  DataTypes
} from 'sequelize'
import { sequelize } from '../database/sequelize'

export class Tag extends Model<
InferAttributes<Tag>,
InferCreationAttributes<Tag, { omit: 'id' }>
> {
  declare id: CreationOptional<number>
  declare name: string
}

Tag.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  },
  {
    sequelize
  }
)
