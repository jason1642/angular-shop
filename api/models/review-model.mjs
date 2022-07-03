import mongoose from 'mongoose'

const snakeCaseStamps = {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
};
  

const reviewSchema = new mongoose.Schema({
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
  content: {
    type: String,
  },
  item_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item',
  },
  rating: {
    type: Number,
    min: 0, 
    max: 5
  },
}, snakeCaseStamps)

export default reviewSchema