import User from '../models/user-model.mjs'
import express from 'express'
import mongoose from 'mongoose'
import _ from 'lodash'

const userRouter = express.Router()


const createUser = async (req, res, next) => {
  // Based on the model,  if no duplicates are allowed, I do not have to check if username or email already exists manually
  try {
    const user = await new User(_.assign(_.pick(req.body, ['name', 'password']), { _id: new mongoose.Types.ObjectId(), contact: {email: req.body.email} }))
    console.log(user)
    await user.save()
    return res.send(user)
    
  } catch (err) {
    console.log(err)
    return res.send('Error').status(400)
  }

}
userRouter.post('/create', createUser)


const getAllUsers = async (req, res) =>
  await User.find({}).then(users => {
    return res.send(users)
  })

userRouter.get('/all', getAllUsers)

const getOneUser = async (req, res, next) => {
  try {
    // const userId = new mongoose.Types.ObjectId(req.params.id)
    await User.findById(mongoose.Types.ObjectId(req.params.id))
      .then(user => {
        console.log(user.name)
      if (user.name) {
        console.log(user.name)
        return res.send(user)
      } else {
        return res.status(404).send({message: 'User does not exist'})
      }
    })  
  } catch (err) {
    console.log({message: 'User not found'})
    return res.status(404).send({message: 'User not found'})
  }

}
userRouter.get('/:id', getOneUser)



const updateUser = async (req, res, next) => {
  try {
    const user = await User.findById(mongoose.Types.ObjectId(req.params.id))
    console.log()
    await user.updateOne(req.body)
    await user.save()
    return res.send(user)
  
  } catch (err) {
    return res.status(404).json({message: 'User not found'})
  }

}
userRouter.put('/:id/update', updateUser)

const deleteUser = async (req, res) => {
  try {
     await User.deleteOne({ _id: mongoose.Types.ObjectId(req.params.id) }).then(message => {
    return res.send(message)
  })
  } catch (err) {
    return res.json({message: 'User not found'})
  }
 
}

userRouter.delete('/:id/delete', deleteUser)











export default userRouter