import { User } from '../database/User'

interface IUser {
  username: string;
  password: string;
  id ? : number;
}

class UserService {
  constructor() {}

  async register({ username, password }: IUser) {
    const userExists = await User.findOne({ where: { username } })
    if (userExists) return userExists;

    const user = await User.create({ username, password })
    return user;
  }

  async destroy(username: string) {
    await User.destroy({ where: { username } })
  }
}

export { UserService }