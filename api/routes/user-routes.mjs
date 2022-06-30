import User from '../models/user-model.mjs'
import express from 'express'
import mongoose from 'mongoose'
import _ from 'lodash'

const userRouter = express.Router()


const createUser = async (req, res, next) => {
  // Based on the model,  if no duplicates are allowed, I do not have to check if username or email already exists manually
  try {
    const user = await new User(_.assign(_.pick(req.body, ['username', 'password']), { _id: new mongoose.Types.ObjectId(), contact: {email: req.body.email} }))
    console.log(user)
    await user.save()
    return res.send(user)
    
  } catch (err) {
    console.log(err)
    return res.send('Error').status(400)
  }

}
userRouter.post('/create', createUser)





export default userRouter