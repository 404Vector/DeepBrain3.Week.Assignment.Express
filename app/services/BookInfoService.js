import db from '../models/index.js'
import getDatabase from '../lambdas/getDatabase.js'

export default function BookInfoService(){
    const BookInfo = db.BookInfo
    const dbo = getDatabase()
    const dbConnect = dbo.getDb();

    return {
        joinBookInfo(req, res){
            const data = req.body;
            new BookInfo(data).save((err)=>{
                if(err){
                    res.status(500).json({message: err})
                    console.log(' - Fail to joining book')
                    return;
                }else{
                    console.log(' - Success to joining book :: ' + data.bookName)
                    res.status(200).json({ok: 'ok'})
                    //return;
                }
            })

            
        },

        deleteBookInfo(req, res){
            const { id } = req.params;
            BookInfo.findByIdAndDelete(id, (err) => {
              if (err) {
                res.status(500).json({ message: err });
                console.log(" - Fail to deleting a item");
                return;
              } else {
                res.status(200).json({ ok: "ok" });
              }
            });
        },

        updateBookInfo(req, res){
            const { id } = req.params;
            BookInfo.findByIdAndUpdate(id, { ...req.body }, (err) => {
                if (err) {
                  res.status(500).json({ message: err });
                  console.log(" - Fail to updating");
                  return;
                } else {
                  res.status(200).json({ ok: "ok" });
                }
              });
        },
        
        //req 안쓰면 _req로 표기
        getBookInfos(_req, res){
            BookInfo.find()
            .limit(10)
            .sort([["_id", -1]])
            .exec((err, bookInfos) => {
              console.log(" - success to return items");
              res.status(200).json(bookInfos);
            });
        },

        getBookInfo(req, res) {
            const { id } = req.params;
            BookInfo.findById(id).exec((err, bookInfo) => {
              if (err) {
                res.status(500).json({ message: err });
                console.log(" - Fail to reading item ");
              } else {
                res.status(200).json(bookInfo);
              }
            });
        },
            
    }
}