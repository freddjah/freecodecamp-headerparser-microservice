var express = require('express')
var app = express()

var cors = require('cors')
app.use(cors({optionSuccessStatus: 200}))  // some legacy browsers choke on 204

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
})

// Returns browser information. IP, language and user agent.
app.get('/api/whoami', (req, res) => {
  res.json({
    ipaddress: req.ip, 
    language: req.get('Accept-Language'),
    software: req.get('User-Agent')
  })
})

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
