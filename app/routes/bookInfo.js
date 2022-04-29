import express from "express"
import cors from 'cors'
import dotenv from 'dotenv'

import BookInfoService from "../services/BookInfoService.js"
import applyDotenv from "../lambdas/applyDotenv.js";

const { origin } = applyDotenv(dotenv);

const corsOptions = {
  origin: origin,
  optionsSuccessStatus: 200,
};

const app = express();

app.use(cors());
app.use(function (_req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});

app.route("/")
.post(cors(corsOptions), (req, res) => {
    BookInfoService().joinBookInfo(req, res);
})
.get(cors(corsOptions), (req, res) => {
    BookInfoService().getBookInfos(req, res);
});

app.route("/:id")
.get(cors(corsOptions), (req, res) => {
    BookInfoService().getBookInfo(req, res);
})
.patch(cors(corsOptions), (req, res) => {
    BookInfoService().updateBookInfo(req, res);
})
.delete(cors(corsOptions), (req, res) => {
    BookInfoService().deleteBookInfo(req, res);
});

app.post('/join', cors(corsOptions), (req, res) => {
    console.log(' routes~join ')
    BookInfoService().joinBookInfo(req, res)
})

app.post('/delete', cors(corsOptions), (req, res) => {
    console.log(' routes~delete ')
    BookInfoService().deleteBookInfo(req, res)
})

app.post('/update', cors(corsOptions), (req, res) => {
    console.log(' routes~update ')
    BookInfoService().updateBookInfo(req, res)
})

app.get('/getBookInfos', cors(corsOptions), (req, res) => {
    console.log(' routes~getBookInfos ')
    BookInfoService().getBookInfos(req, res)
})


export default app