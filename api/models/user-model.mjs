import mongoose from 'mongoose';
import validator from 'validator'

const snakeCaseStamps = {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }};
   
const User = mongoose.model('User', new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId
  },
  username: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 24,
    validate: [validator.isAlphanumeric, 'Usernames may only have letters and numbers.']
  },
  password: {
    type: String,
    required: [true, 'Enter a password'],
    minlength: 5,
    maxlength: 255
  }, 
  profile_image: {
    type: String
  },
  bio: {
    type: String,
    minlength: 0,
    maxlength: 300,
    default: ''
  },
  contact: {
    phone: { type: String, default: '' },
    email: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 32,
      unique: true,
      validate: [validator.isEmail, 'Invalid email']
    },
    preferred_method: { type: String, default: 'email'}
  },


  // listings: {
  //   type: [itemSchema], default: []
  // },

  preferences: {
    type: {
      dark_mode: { type: Boolean, default: false },
      avatar_color: {type: String, default: '#3174e8'},
    },
    default: {
      preferences: {
        dark_mode: false,
        avatar_color: 'blue'
      }
    },
    _id: false
  }
  // }
  // comments: [{typ}]
}, snakeCaseStamps));


// Implement last_online, active, preferences: avatar_color


export default User;