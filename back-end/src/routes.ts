import { UserController } from './controllers/UserController';
import { Router, Response, Request } from 'express'
const router = Router()
const userController = new UserController();

router.post('/api/v1/user', userController.register)
router.post('/api/v1/user/auth', userController.auth)

export { router as routes }