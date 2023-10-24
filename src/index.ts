import express, { type Express } from 'express'
import { sequelize } from './core/database/sequelize'
import { routes } from './core/routes'

const app: Express = express()

app.use(express.json())
app.use('/', routes())

sequelize
  .sync()
  .then(() => {
    console.log('📘 Connected To Database')
  })
  .catch((err) => {
    console.log(err)
  })

const PORT = 3000 ?? process.env.PORT
if (process.env.ENVIRONMENT !== 'test') {
  app.listen(PORT, () => {
    console.log(`🟢 Server listening on port ${PORT}...`)
  })
}

export default app
