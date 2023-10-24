import { Router } from 'express'

const router: Router = Router()

router.get('/me', () => {})

router.get('/:userId/transactions', () => {})

router.post('/', () => {})

router.put('/me', () => {})

export { router as accountRoutes }
