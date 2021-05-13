import { UserController } from './controllers/UserController';
import { Router, Response, Request } from 'express'
import { UserMiddleware } from './middlewares/UserMiddleware'
const router = Router()
const userController = new UserController();
const userMiddlewarer = new UserMiddleware()

router.post('/api/v1/user', userMiddlewarer.auth, userController.register)
router.post('/api/v1/user/auth', userController.auth)

export { router as routes }