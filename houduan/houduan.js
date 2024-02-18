
const express = require('express')
const server = express()
// var router = server.router()
const mysql = require('mysql')
const cors = require('cors')

const db = mysql.createPool({
  host:'127.0.0.1',
  port:'3306',
  user:'heilong_lyhy',
  password:'mjlyhy',
  database:'choose'
})
const sqlstr = 'select * from choose'

server.use(cors())

server.get('/user',(req,res) => {
  db.query(sqlstr,(err,results) => {
    if(err){
      return console.log(err.message)
    }else{
      res.send({
        status:true,
        data:{
          msg:results
        },
      })
    }
    }
  )
})
server.post('/user',(req,res) => {
  db.query(sqlstr,(err,results) => {
    if(err){
      return console.log(err.message)
    }else{
      res.send({
        status:true,
        data:{
          msg:results
        },
      })
    }
    }
  )
})
// server.on('request',(res,req) => {
//   console.log('有人访问了服务器')
// })



// const user = {cquestion:'4+2=',canwser:'6'}

server.listen(2317,() => {
  console.log('http server running')
})