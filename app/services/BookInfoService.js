import db from '../models/index.js'
import getDatabase from '../lambdas/getDatabase.js'

export default function BookInfoService(){
    const BookInfo = db.BookInfo
    const dbo = getDatabase()
    const dbConnect = dbo.getDb();

    return {
        join(req, res){
            console.log(' ### 5. join 진입 ### '+ JSON.stringify(req.body))
            new BookInfo(req.body).save(function(err){
                if(err){
                    res.status(500).json({message: err})
                    console.log('Fail to joining book')
                    return;
                }else{
                    console.log('Success to joining book :: ' + body.bookName)
                    res.status(200).json({ok: 'ok'})
                    return;
                }
            })

            
        },
        delete(req, res){
            BookInfo
                .findByIdAndRemove({bookName: req.body.bookName})
                .exec((err, bookInfo) => {
                    if (err) {
                        res
                            .status(500)
                            .send({message: err});
                        return;
                    }
                    if (bookInfo) {
                        res
                            .status(200)
                            .send({message: "The book is deleted!"});
                        return;
                    }
                })
        },
        update(req, res){
            BookInfo
                .findByIdAndUpdate({bookName: req.body.bookName})
                .exec((err, bookInfo) => {
                    if (err) {
                        res
                            .status(500)
                            .send({message: err});
                        return;
                    }
                    if (bookInfo) {
                        res
                            .status(200)
                            .send({message: "The book is updated"});
                        return;
                    }
                })
        },
        checkDuplicateBookName(req, res) {
            BookInfo
                .findById({bookName: req.body.bookName})
                .exec((err, bookInfo) => {
                    if (err) {
                        res
                            .status(500)
                            .send({message: err});
                        return;
                    }
                    if (bookInfo) {
                        res
                            .status(400)
                            .send({message: "The book is already exist!"});
                        return;
                    }
                })
        },
        getUserByBookName(req, res){
            const bookName = req.body.bookName
            BookInfo
                .findById({bookName: bookName})
                .exec((_err, bookInfo) => {
                    res.status(200).json(bookInfo)
                })
        },
        //req 안쓰면 _req로 표기
        getBookInfos(_req, res){
            BookInfo.find().exec(
                (err, bookInfo)=>{
                    res.status(200).json(bookInfo)
                    return;
                }
            )
        }
        
    }
}