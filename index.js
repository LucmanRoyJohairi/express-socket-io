import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import { fileURLToPath } from 'url'
import { dirname } from 'path'


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express()
const server = http.createServer(app)
const PORT = 3000
const io = new Server(server)

io.on('connection', (socket)=>{
 console.log(`a user connected`) ;
 socket.on('disconnect', ()=>{
  console.log('user has disconnected');
 })
})

app.get('/', (req, res)=>{
  // res.end()
  res.sendFile(__dirname + '/pages/index.html')
})

server.listen(PORT, ()=>{
  console.log(`server running on port ${PORT}`)
})