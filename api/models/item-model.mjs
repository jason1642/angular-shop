import mongoose from 'mongoose'
import validator from 'validator'


const snakeCaseStamps = {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }};

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  size: String,
  quantity: {
    type: Number,
    required: true,
  },
  color: String,
  category: {
    type: String,
    required: true,
  },
  gender: {
    type: String
  },
  brand: String,
  tags: [String],
  seller: {
    type: {
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
    required: true,
  },
  cost: {type:{
    original_price: Number,
    latest_price: Number,
    currency: String,
  },
  required: true},
  images: [String],

  _id: {
    type: mongoose.Schema.Types.ObjectId
  },


}, snakeCaseStamps)


const Item = mongoose.model('Item', itemSchema)

export {itemSchema, Item}