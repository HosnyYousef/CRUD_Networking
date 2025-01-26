const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient


//to run code: npm run dev




console.log('May Node be with you')

let connectionString = 'mongodb+srv://admin:112233445566@cluster0.gy43g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

MongoClient.connect(connectionString).then(
  console.log('Connected to Database')
).catch(error => console.error(error))

MongoClient.connect(connectionString)
  .then(client => {
    // ...
    const db = client.db('star-wars-quotes')
    app.use(/* ... */)
    app.get('/', (req, res) => {
      res.sendFile(__dirname + '/index.html')
      // Note: __dirname is the current directory you're in. Try logging it and see what you get!
      // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
    })  
    app.post(/* ... */)
    app.listen(/* ... */)
    console.log('Connected to Database')
  })
  .catch(console.error)


app.use(express.urlencoded({ extended: true }))



  app.post('/quotes', (req, res) => {
    console.log(req.body)
  })

app.listen(3000, function () {
    console.log('listening on 3000')
  })

