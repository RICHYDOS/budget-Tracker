import { Router, type Response, type Request } from 'express'
import { tagRoutes } from './tags'
import { authRoutes } from './auth'
import { userRoutes } from './users'
import { accountRoutes } from './accounts'
import { transactionRoutes } from './transactions'

export const routes = (): Router => {
  const router = Router()

  router.get('/', (req: Request, res: Response) => {
    res.status(200).json('Welcome to budget-Tracker')
  })

  router.use('/api/tags', tagRoutes)
  router.use('/api/auth', authRoutes)
  router.use('/api/users', userRoutes)
  router.use('/api/accounts', accountRoutes)
  router.use('/api/transactions', transactionRoutes)

  return router
}
