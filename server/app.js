const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const api = require('./api')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use('/app', express.static('client'))
app.use('/components', express.static('bower_components'))
app.use('/api', api)

var server = app.listen(process.env.PORT || 8081, () => {

  var host = server.address().address
  var port = server.address().port

  console.log("\"products\" app listening at http://%s:%s", host, port)

})
