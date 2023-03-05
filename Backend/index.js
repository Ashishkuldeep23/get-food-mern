const express = require("express")
const mongoose = require("mongoose")
const router = require("./src/routers/route")

const app = express()


mongoose.connect( "mongodb+srv://ashishkuldeep23:RAPXp7lktCcf8jBm@cluster0.xtascce.mongodb.net/GetFood")
.then( ()=>console.log("DB connected"))
.catch( (e)=>console.log(e))


// app.get( '/' , (req ,res)=>{
//     res.send("Hello World!")
// } )

// // // Below for handle CORS Policy error --------->
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(express.json())

app.use( '/', router)

const port = 3001

app.listen(port , ()=>{
    console.log("Express app running at",port)
})