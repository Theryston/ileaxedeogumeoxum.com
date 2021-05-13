import { User } from '../database/User';
import bcrypt from 'bcryptjs';
import util from 'util';
import jwt from 'jsonwebtoken';
const jwtSign = util.promisify(jwt.sign)

const jwtSecret = 'kwksjdbdbdjwkajdhsjam'

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

    const user = await User.create({ username, password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)) })
    return user;
  }

  async destroy(username: string) {
    await User.destroy({ where: { username } })
  }

  async auth({ password, username }: IUser) {
    const user: any = await User.findOne({ where: { username } })

    if (!user) throw new Error("Usuário ainda não cadastrado")

    const correctPassword = bcrypt.compareSync(password, user.password)

    if (correctPassword) {
      const token = await jwtSign({ userId: user.id }, jwtSecret)
      return token
    }

    throw new Error('Senha incorreta!')
  }
}

export { UserService }