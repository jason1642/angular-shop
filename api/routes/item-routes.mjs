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











export default itemRouter