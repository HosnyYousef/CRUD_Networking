const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient

//to run code: npm run dev

console.log('May Node be with you')

let connectionString = 'mongodb+srv://admin:112233445566@cluster0.gy43g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

MongoClient.connect(connectionString)
  .then(
    client => {
    const db = client.db('networking_leads')
    app.use(express.urlencoded({ extended: true }))
    app.get('/', (req, res) => {
      res.sendFile(__dirname + '/index.html')
    })  
    app.post('/quotes', (req, res) => {
      console.log(req.body)
    })  
    app.listen(3000, function () {
      console.log('listening on 3000')
    })
    console.log('Connected to Database')
  })
  .catch(console.error)









