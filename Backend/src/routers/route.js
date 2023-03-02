const express = require("express")

const router = express.Router()

const {createUser , logInUser} = require("../controller/userController")

// // For check only --->
router.get( "/chcek" , (req , res)=>{res.send("Check Successful")} )


// // // Create New user ---->

router.post( "/signIn" , createUser)


// // // loginguser ---->
router.post( "/logIn" , logInUser)


module.exports = router
