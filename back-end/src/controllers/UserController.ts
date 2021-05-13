import { UserService } from './../services/UserService';
import { Response, Request } from 'express';


export class UserController {

  constructor() {}

  async register(req: Request, res: Response) {
    try {
      const { username, password } = req.body
      const user = await new UserService().register({ username, password });

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
}