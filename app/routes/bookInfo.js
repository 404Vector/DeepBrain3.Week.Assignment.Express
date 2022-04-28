import express from "express"
import cors from 'cors'
import dotenv from 'dotenv'
import passport from 'passport'
import BookInfoService from "../services/BookInfoService.js"
dotenv.config()
const mongoUri = process.env.MONGO_URI
const port = process.env.PORT
const jwtSecret = process.env.JWT_SECERT
const origin = process.env.ORIGIN
const corsOptions = {
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200
}
const app = express()
app.use(cors());
app.use(function (_req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});

app.post('/join', cors(corsOptions), (req, res) => {
    console.log(' routes~join ')
    BookInfoService().join(req, res)
})

app.post('/delete', cors(corsOptions), (req, res) => {
    console.log(' routes~delete ')
    BookInfoService().delete(req, res)
})

app.post('/update', cors(corsOptions), (req, res) => {
    console.log(' routes~update ')
    BookInfoService().update(req, res)
})

app.post('/checkDuplicateBookName', cors(corsOptions), (req, res) => {
    console.log(' routes~checkDuplicateBookName ')
    BookInfoService().checkDuplicateBookName(req, res)
})

app.post('/getBookByBookName', cors(corsOptions), (req, res) => {
    console.log(' routes~getUserByBookName ')
    BookInfoService().getUserByBookName(req, res)
})

app.get('/getBookInfos', cors(corsOptions), (req, res) => {
    console.log(' routes~getBookInfos ')
    BookInfoService().getBookInfos(req, res)
})


export default app