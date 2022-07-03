import mongoose from 'mongoose'

const snakeCaseStamps = { 
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
}


const userAnswers = new mongoose.Schema({
  question_id: {
    types: mongoose.Schema.Types.ObjectId,
    ref: 'Question'
  },
  author: {
    user_id: {
      type: {
        user_id: mongoose.Schema.Types.ObjectId,
        ref: 'User'
        }
      },
      name: String,
      profile_image: String,
    },
    required: true,

}, snakeCaseStamps)



const itemQuestionSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId
  },
  author: {
    type: {
      user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      name: String,
      profile_image: String,
    },
    required: true,
  },
  content: String,
  answers: [userAnswers]
})


const Question = mongoose.model('Question', itemQuestionSchema)

export { itemQuestionSchema, Question }



