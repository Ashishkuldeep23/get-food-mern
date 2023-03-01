const express = require("express")

const app = express()


app.get( '/' , (req ,res)=>{
    res.send("Hello World!")
} )

const port = 3001

app.listen(port , ()=>{
    console.log("Express app running at",port)
})