'use strict'

const express = require('express')
const moment = require('moment')

const app = express()
const server = app.listen(3000)
const io = require('socket.io').listen(server)

app.use(express.static('./public'))
app.use(express.static('./node_modules/bootstrap/dist'))

io.sockets.on('connection', function (socket) {
  console.log(`connected: ${socket.id}`)
})
console.log('Server is running on port 3000 at %s', moment().format('HH:mm:ss'))
