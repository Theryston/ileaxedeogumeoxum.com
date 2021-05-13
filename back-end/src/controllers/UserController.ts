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