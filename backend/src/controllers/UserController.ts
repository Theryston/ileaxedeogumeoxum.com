import { UserService } from './../services/UserService';
import { Response, Request } from 'express';


export class UserController {

  constructor() {}

  async register(req: Request, res: Response) {
    try {
      const { username, password } = req.body
      const userService = new UserService()
      const user = await userService.register({ username, password });

      res.status(201).json({
        user
      })
    } catch (err) {
      console.log(err)
      res.status(500)
      res.json({
        message: err.message
      })
    }
  }

  async read(req: Request, res: Response) {
    try {
      const userService = new UserService()

      const users = await userService.read()
      res.status(200).json({ users })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const userService = new UserService()
      await userService.destroy(req.params.username)
      res.sendStatus(200)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  async auth(req: Request, res: Response) {
    try {
      const { username, password } = req.body
      const userService = new UserService()
      const token = await userService.auth({ password, username })

      res.status(201).json({
        token
      })
    } catch (err) {
      console.log(err)
      res.status(401)
      res.json({
        message: err.message
      })
    }
  }
}