import { User } from '../database/User'

interface IUser {
  username: string;
  password: string;
  id ? : number;
}

class UserService {
  constructor() {}

  async register({ username, password }: IUser) {
    return 'ok'
  }
}

export { UserService }