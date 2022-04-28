import dotenv from 'dotenv'
import mongoose from 'mongoose'
import UserModel from './UserModel.js'
import BookInfoModel from './BookInfoModel.js'
mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = dotenv.MONGO_URI
db.User = new UserModel(mongoose)
db.BookInfo = new BookInfoModel(mongoose)

export default db