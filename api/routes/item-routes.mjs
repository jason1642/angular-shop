import express from 'express'
import mongoose from 'mongoose'
import {Item} from '../models/item-model.mjs'
import _ from 'lodash'
const itemRouter = express.Router()


const createListing = async (req, res) => {
  try { 
    const newItem = await new Item(_.assign(req.body, { _id: new mongoose.Types.ObjectId() }))
    await newItem.save()
    return res.send(newItem)

  } catch (err) {
    console.log(err)
    return res.status(403).json({ message: 'Item listing is invalid', errors: err})
  }
}
itemRouter.post('/create', createListing)

const getAllListings = async (req, res) => 
  await Item.find({}).then(items => {
    return res.send(items)
  })

  
itemRouter.get('/all', getAllListings)

const getOneListing = async (req, res) => {
  try {
    const item = await Item.findById(mongoose.Types.ObjectId(req.params.id))
    return res.send(item)
  } catch (err) {
    console.log(err)
    return res.status(404).send(err)
  }
}
itemRouter.get('/:id', getOneListing)



const updateListing = async (req, res) => {
  try {
    const item = await Item.findById(mongoose.Types.ObjectId(req.params.id))
    await item.updateOne(req.body)
    await item.save()
    return res.send(item)
  } catch (err) {
    return res.status(404).json({message: 'User not found', error: err})
  }
}

itemRouter.put('/:id/update', updateListing)

const deleteUser = async (req, res) => {
  try { 
    await Item.deleteOne({ _id: mongoose.Types.ObjectId(req.params.id) }).then(message => {
      return res.send(message)
    })
  } catch (err) {
  return res.json({message: 'User not found', error: err})
  }
}
itemRouter.delete('/:id/delete', deleteUser)





export default itemRouter