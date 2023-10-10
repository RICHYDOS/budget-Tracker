import { sequelize } from './core/database/sequelize'

sequelize
  .sync()
  .then(() => {
    console.log('📘 Connected To Database')
  })
  .catch((err) => {
    console.log(err)
  })
