import dotenv from 'dotenv';
dotenv.config();

import express from 'express'
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send("Hi Server is ready")
})

app.get('/twitter', (req, res) => {
  res.send("This is my twiiter account")
})

app.listen(process.env.PORT, () => {
  console.log(` example app listenig on ${port}`)
 
})

