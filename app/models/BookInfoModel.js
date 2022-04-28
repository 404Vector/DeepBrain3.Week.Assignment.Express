
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import applyDotenv from '../lambdas/applyDotenv.js'

export default function BookInfoModel(mongoose) {
    const {jwtSecret} = applyDotenv(dotenv)
    const userSchema = mongoose.Schema({
        libName: String,
        bookName: String,
        author: String,
        publisher: String,
        publishedYear: String,
        dataBaseData: String,
    })
    
    return mongoose.model('BookInfo', userSchema)

}