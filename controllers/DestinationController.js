const express = require('express');
const router = express.Router();

const authMiddleware=require("../middleware/authentication.js");

const DestinationModel=require('../models/DestinationModel.js');



router.get("/listing/:id",(req,res)=>{
    //fetch the id from the url use the req obj
    const id=parseInt(req.params.id);
   const destination=DestinationModel.getADestination(id);
    res.render("destinationDetails",{
        destination

    });
    

})

//am i supposed to keep this?

// router.get("/listing",authMiddleware.isAuthenticated,authMiddleware.isAuthorized ,(req,res)=>{
    router.get("/listing",(req,res)=>{

    const allDestinations=  DestinationModel.getAllDestinations()
    res.render("destinationListing",{

        allDestinations

    });
})


router.get("/details", (req,res)=>{


    res.render("destinationDetails");
})




module.exports = router;

//////////