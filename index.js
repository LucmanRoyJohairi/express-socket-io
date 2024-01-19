import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { v4 } from 'uuid';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express()
const server = http.createServer(app)
const PORT = 3000
const io = new Server(server)

// socket io connection listener
io.on('connection', (socket)=>{
 const userId = v4().substring(0,5) //random id generator
 console.log(`\nuser-${userId} connected `) ;

 //event listeners
 socket.on('disconnect', ()=>{
  console.log(`\nuser-${userId} disconnected`);
 })

 socket.on('chat message', (msg) => {
    console.log(`user-${userId}: ` + msg);
  });
})

app.get('/', (req, res)=>{
  // res.end()
  res.sendFile(__dirname + '/pages/index.html')
})

server.listen(PORT, ()=>{
  console.log(`server running on port ${PORT}`)
})