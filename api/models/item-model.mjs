import mongoose from 'mongoose'
import validator from 'validator'


const snakeCaseStamps = {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }};

const itemSchema = new mongoose.Schema({
  name: String,
  seller: {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    name: String,
    email: {
      type: String,
      validate: [validator.isEmail, 'Invalid email address']
    },
    profile_image: String,
  },
  cost: {
    value: Number,
    currency: String,
  },


  _id: {
    type: mongoose.Schema.Types.ObjectId
  },


}, snakeCaseStamps)


const Item = mongoose.model('Item', itemSchema)

export {itemSchema, Item}