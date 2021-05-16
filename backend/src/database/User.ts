import Sequelize from 'sequelize';
import { connection } from './connection'

const User = connection.define('users', {
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

User.sync({
  force: false
})

export { User };