import {
  Model,
  type InferAttributes,
  type InferCreationAttributes,
  type CreationOptional,
  DataTypes
} from 'sequelize'
import { sequelize } from '../database/sequelize'
import { Account } from './account'
import { Tag } from './tag'
import { type TransactionAttributes } from '../interfaces/transaction'

export class Transaction
  extends Model<
  InferAttributes<Transaction>,
  InferCreationAttributes<Transaction, { omit: 'id' }>
  >
  implements TransactionAttributes {
  declare id: CreationOptional<number>
  declare account_id: number
  declare transaction_type: TransactionAttributes['transaction_type']
  declare amount: number
  declare tag_id: number
}

Transaction.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    account_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    transaction_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    amount: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize
  }
)

Transaction.belongsTo(Account, {
  foreignKey: 'account_id',
  targetKey: 'id',
  as: 'account'
})

Transaction.belongsTo(Tag, {
  foreignKey: 'tag_id',
  targetKey: 'id',
  as: 'tag'
})
