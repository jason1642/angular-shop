import express from 'express'
import cors from 'cors'
import userRouter from './routes/user-routes.mjs'
import itemRouter from './routes/item-routes.mjs'
import questionRouter from './routes/question-routes.mjs'



const app = express()

app.use(cors())
app.use(express.json());

app.use('/user', userRouter)
app.use('/item', itemRouter)
app.use('/question', questionRouter)



export default app