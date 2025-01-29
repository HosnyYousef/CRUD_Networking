const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient

//to run code: npm run dev

console.log('May Node be with you')

let connectionString = 'mongodb://admin:112233445566@cluster0-shard-00-00.gy43g.mongodb.net:27017,cluster0-shard-00-01.gy43g.mongodb.net:27017,cluster0-shard-00-02.gy43g.mongodb.net:27017/?ssl=true&replicaSet=atlas-8yhosb-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0'

// 'mongodb+srv://admin:112233445566@cluster0.gy43g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

//CRUD
  // Create
  // Read
  // Update
  // Delete

MongoClient.connect(connectionString)
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('network-data-quotes')
    const quotesCollection = db.collection('quotes')

    app.set('view engine', 'ejs')

    app.use(express.urlencoded({ extended: true }))
    app.use(express.static('public'))
    app.use(express.json())

    

    app.get('/', (req, res) => {
      quotesCollection.find().toArray()
      .then(results => {
        console.log(results)
        res.render('index.ejs', {quotes: results})
      })
      // db.collection('quotes')
      .catch(error => console.error(error))
    })

    app.post('/quotes', (req, res) => {
      quotesCollection
        .insertOne(req.body)
        .then(result => {
          res.redirect('/')
        })
        .catch(error => console.error(error))
    })

    app.put('/quotes', (req, res) => {
      console.log(req.body)
    })
  
  // trying to delete from database mongoDB
    app.delete('/quotes', (req, res) => {
      quotesCollection
      .deleteOne(query, options)
      .then(result => {
        res.json(`Deleted Darth Vader's quote`)
      })
      .catch(error => console.error(error))    })


    app.listen(3000, function () {
      console.log('listening on 3000')
    })
  })
  .catch(console.error)
















