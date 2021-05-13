import { Sequelize } from 'sequelize';
import { config } from 'dotenv'
config()


const connection = new Sequelize('ile', 'root', 'Theryston10', {
  host: 'localhost',
  dialect: 'mysql'
})

export { connection }