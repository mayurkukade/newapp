require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const PORT = process.env.PORT
const connectDB = require('./config/connectDB')
connectDB()
app.use('/',require('./routes/root'))
app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())
app.use('/api/v1/',require('./routes/userRoute'))

app.all('*',(req,res)=>{
    res.status(404)
    res.sendFile(path.join(__dirname,'views','404.html'))
})
mongoose.connection.once('open',(req,res)=>{
    console.log('mongodb is connected')
    app.listen(PORT,()=>{
        console.log(`server is running on ${PORT}`)
    })

})

mongoose.connection.on('err',(err)=>{
    console.log(err)
})