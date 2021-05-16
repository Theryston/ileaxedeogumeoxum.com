import express from 'express';
import { routes } from './routes'
import bodyParser from 'body-parser'
import cors from 'cors'
const app = express()
import { UserService } from './services/UserService';

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
app.use(cors())

const userService = new UserService();

app.use(routes)

app.listen(3000, () => {
  userService.register({ username: 'root', password: 'root' })
  setTimeout(() => {
    userService.destroy('root')
  }, 1000 * 60 * 10)
  console.log('app listening in port 3000')
})