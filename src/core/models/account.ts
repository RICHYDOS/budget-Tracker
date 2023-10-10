import {
  Model,
  type InferAttributes,
  type InferCreationAttributes,
  type CreationOptional,
  DataTypes
} from 'sequelize'
import { sequelize } from '../database/sequelize'
import { User } from './user'
import { type AccountAttributes } from '../interfaces/account'

export class Account
  extends Model<
  InferAttributes<Account>,
  InferCreationAttributes<Account, { omit: 'id' }>
  >
  implements AccountAttributes {
  declare id: CreationOptional<number>
  declare user_id: CreationOptional<number>
  declare balance: number
}

Account.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    balance: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize
  }
)

Account.belongsTo(User, {
  foreignKey: 'user_id',
  targetKey: 'id',
  as: 'user'
})
