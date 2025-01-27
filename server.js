const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient

//to run code: npm run dev

console.log('May Node be with you')

let connectionString = 'mongodb://admin:112233445566@cluster0-shard-00-00.gy43g.mongodb.net:27017,cluster0-shard-00-01.gy43g.mongodb.net:27017,cluster0-shard-00-02.gy43g.mongodb.net:27017/?ssl=true&replicaSet=atlas-8yhosb-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0'

// 'mongodb+srv://admin:112233445566@cluster0.gy43g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

MongoClient.connect(connectionString)
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('star-wars-quotes')
  })
  .catch(console.error)

app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
    // Note: __dirname is the current directory you're in. Try logging it and see what you get!
    // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
  })

  app.post('/quotes', (req, res) => {
    console.log(req.body)
  })

app.listen(3000, function () {
    console.log('listening on 3000')
  })








