import express from "express"
import cors from 'cors'
import dotenv from 'dotenv'
import passport from 'passport'
import UserService from "../services/UserService.js"
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
    console.log(' ### 5. 라우터 진입 ### ')
    UserService().join(req, res)
})

app.post('/login', cors(corsOptions), (req, res) => {
    console.log(' ### 5. 라우터 진입 ### ')
    UserService().login(req, res)
})

app.post('/logout', cors(corsOptions), (req, res) => {
    console.log(' ### 5. 라우터 진입 ### ')
    UserService().logout(req, res)
})

app.post('/getUsers', cors(corsOptions), (req, res) => {
    console.log(' ### getUsers ### ')
    UserService().getUsers(req, res)
})

export default app