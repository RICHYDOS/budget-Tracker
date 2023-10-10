/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import { Sequelize, type Options } from 'sequelize'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const sequelizeConfig: Options =
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('../config/config')[process.env.NODE_ENV || 'development']

const { database, username, password, ...otherConfig } = sequelizeConfig
const modifiedConfig = {
  ...otherConfig,
  define: {
    underscored: true
  }
}
const sequelize = new Sequelize(
  database || '',
  username || '',
  password,
  modifiedConfig
)

export { sequelize, Sequelize }
