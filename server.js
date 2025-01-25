const express = require('express')
const app = express()


console.log('May Node be with you')


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
    // Note: __dirname is the current directory you're in. Try logging it and see what you get!
    // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
  })

app.listen(3000, function () {
    console.log('listening on 3000')
  })