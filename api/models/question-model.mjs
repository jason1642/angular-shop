import mongoose from 'mongoose'

const snakeCaseStamps = { 
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
}


const userAnswers = new mongoose.Schema({
  question_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question'
  },
  author:{
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
  upvotes: Number,

}, snakeCaseStamps)



const questionSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId
  },
  item_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item',
  },
  author: {
    _id: false,
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
  upvotes: Number,
  answers: [userAnswers]
})


const Question = mongoose.model('Question', questionSchema)

export { questionSchema, Question }



