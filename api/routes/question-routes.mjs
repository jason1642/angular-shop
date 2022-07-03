import mongoose from 'mongoose'
import express from 'express'
import { Item } from '../models/item-model.mjs'
import { Question } from '../models/question-model.mjs'
import _ from 'lodash'

const questionRouter = express.Router()
// CRUD, answerQuestion, upvote, report


// req.body - item_id, author:{user_id, name, profile_image}, content, 
const createQuestionForItem = async (req, res) => {
  
  
  try { 
    const item = await Item.findById(mongoose.Types.ObjectId(req.body.item_id))

    const question = new Question(_.assign(req.body, {
      _id: new mongoose.Types.ObjectId(),
      item_id: item._id
    }))
    console.log(question)
    await question.save()
    return res.send(question)


  } catch (err) {
    console.log(err)
    return res.status(403).json({message: "there was an error", error: err})
  }

}

questionRouter.post('/create/item', createQuestionForItem)
  

const getAllQuestions = async (req, res) => {
  const allQuestions = await Question.find({})
  return res.send(allQuestions)
}
questionRouter.get('/all', getAllQuestions)

const getAllItemQuestions = async (req, res) => {
  try {
    const itemQuestions = await Question.find({ item_id: mongoose.Types.ObjectId(req.params.id) })
    return res.send(itemQuestions)
  } catch (err) {
    return res.status(403).send(err)
  }
  

}
questionRouter.get('/item/:id', getAllItemQuestions)

const getOneQuestion = async (req, res) => {
  console.log(req.params.id)
  try {
    await Question.findById(mongoose.Types.ObjectId(req.params.id))
      .then(question => {
      console.log(question)
      return res.send(question)
    })
  } catch (err) {
    console.log(err)
    return res.status(404).json({
      message: 'Cannot find question',
      error: err
    })
  }
}
questionRouter.get('/:id', getOneQuestion)


const updateQuestion = async (req, res) => {
  try {
    const question = await Question.findById(mongoose.Types.ObjectId(req.params.id))
    await question.updateOne({content: req.body.content})
    await question.save()
    return res.send(question)
  } catch (err) {
    console.log(err )
    return res.status(403).json({
      message: 'There was an error updating your question',
      error: err
      
    })
  }
}
questionRouter.put('/:id/update', updateQuestion)




export default questionRouter;