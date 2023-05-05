require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')

const PORT = process.env.PORT
app.use(express.static(path.join(__dirname,'vies' , '..')))
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})