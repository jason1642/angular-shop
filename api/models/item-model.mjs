import mongoose from 'mongoose'

const snakeCaseStamps = {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }};

const itemSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId
  },


}, snakeCaseStamps)


const Item = mongoose.model('Item', itemSchema)

export {itemSchema, Item}