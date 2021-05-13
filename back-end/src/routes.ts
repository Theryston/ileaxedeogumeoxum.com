import { UserController } from './controllers/UserController';
import { Router, Response, Request } from 'express'
const router = Router()
const userController = new UserController();

router.post('/api/v1/users', userController.register)

export { router as routes }