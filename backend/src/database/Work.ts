import Sequelize from 'sequelize';
import { connection } from './connection';

const Work = connection.define('works', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  message: {
    type: Sequelize.STRING,
    allowNull: false
  }
})


Work.sync({ force: false })


export { Work };