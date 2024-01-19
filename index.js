import express from 'express'
import http from 'http'

const app = express()
const server = http.createServer(app)
const PORT = 3000

app.get('/', (req, res)=>{
  console.log('user visited home route')
  res.send(`<h1>Home routes</h1>`)
})

server.listen(PORT, ()=>{
  console.log(`server running on port ${PORT}`)
})