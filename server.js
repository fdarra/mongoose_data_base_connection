//// 
const express =require('express')
const app = express()

// Middleware to parse JSON requests
app.use(express.json())
require('dotenv').config()
const port= process.env.PORT || 5010
app.listen(port,(err)=>{
    if(err) throw err
        else
    console.log(`Server is running on port ${port}`)

})


/// connection to database
const connect =require('./DBConnection/dbconnection')
connect()

// API endpoint to retrieve data

app.get('./',(req,res)=>{

res.send(" wellcome server ")

})


