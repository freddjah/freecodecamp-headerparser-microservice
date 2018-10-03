var express = require('express')
var app = express()

var cors = require('cors')
app.use(cors({optionSuccessStatus: 200}))  // some legacy browsers choke on 204

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
})

// your first API endpoint... 
app.get('/api/hello', (req, res) => {
  res.json({greeting: 'hello API'})
})

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
