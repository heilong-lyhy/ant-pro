
const express = require('express')
const server = express()
const mysql = require('mysql')

server.get('/user',(req,res) => {
  res.send({
    msg:'success'
  })
})
// server.on('request',(res,req) => {
//   console.log('有人访问了服务器')
// })


const db = mysql.createPool({
  host:'127.0.0.1',
  port:'3306',
  user:'heilong_lyhy',
  password:'mjlyhy',
  database:'choose'
})
const user = {cquestion:'4+2=',canwser:'6'}
const sqlstr = 'insert into choose (cquestion,canwser) values (?,?)'

db.query(sqlstr, [user.cquestion,user.canwser], (err,results) => {
  if(err) return console.log(err.message)
  console.log(results)
  }
)
server.listen(2317,() => {
  console.log('http server running at http://127.0.0.1:2317')
})