
require('dotenv').config();
/*
require()는 module.exports를 리턴한다.
node.js에서 외부 모듈을 가저올 때 사용.
 */
const cors = require('cors');
const express = require('express');
const app = express();
const port = process.env.PORT; // warn! mac Airplay use port 5000.
const APP = './app/routes'

console.log(`server ip is http://localhost:${port}`)

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
<<<<<<< HEAD
app.use(cors()); 
const APP = './app/routes'
// 즉시실행 : ({url:`/api/${leaf}`,app})
// const nodes = ['admin','basic','board','game','todo','user']
// const nodes = ['basic','board','user']
const nodes = ['basic']
for(const leaf of nodes){
  require(`${APP}/${leaf}.route`)({url:`/api/${leaf}`,app})
}
//require(`${APP}/user.route`)({url:`/api/user`,app})
=======
app.use(cors());

>>>>>>> study
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}

app.listen(port, () => {
  console.log('***************** ***************** *****************')
  console.log('********** 서버가 정상적으로 실행되고 있습니다 *********')
  console.log('***************** ***************** *****************')
})

// app.get(~) get 상태만을 허용하는 api를 추가
app.get('/', (req, res) => {
  res.json({ "현재 시간 : ": new Date().toLocaleString() })
})
app.get('/api/now', cors(corsOptions), (req, res) => {
  res.json({ "now": new Date().toLocaleString() })
})