import { UserController } from './controllers/UserController';
import { WorkController } from './controllers/WorkController';
import { Router, Response, Request } from 'express'
import { UserMiddleware } from './middlewares/UserMiddleware'
const router = Router()
const userController = new UserController();
const userMiddlewarer = new UserMiddleware()
const workController = new WorkController()

router.post('/api/v1/user', userMiddlewarer.auth, userController.register)
router.get('/api/v1/users', userMiddlewarer.auth, userController.read)
router.delete('/api/v1/user/:username', userMiddlewarer.auth, userController.delete)
router.post('/api/v1/user/auth', userController.auth)

router.post('/api/v1/work', userMiddlewarer.auth, workController.create)
router.get('/api/v1/works', workController.read)
router.get('/api/v1/work/:id', workController.readById)
router.put('/api/v1/work/:id', userMiddlewarer.auth, workController.update)
router.delete('/api/v1/work/:id', userMiddlewarer.auth, workController.delete)

export { router as routes }