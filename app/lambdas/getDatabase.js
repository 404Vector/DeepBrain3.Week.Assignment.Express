
import { MongoClient } from "mongodb";

const getDatabase = () => {
    const client = new MongoClient(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    let dbConnect = null
    return {
        acceptDb(callback){
            client.connect((err, db) => {
                if(err || !db){
                    return callback(err)
                }
                console.log(' # Try connect '+ process.env.MONGO_DB_NAME + '@MONGO_DB')
                dbConnect = db.db(process.env.MONGO_DB_NAME);
                console.log(' # Success connect the db')
                return callback()
            })
        },
        getDb(){ return dbConnect}

    }
}    
export default getDatabase