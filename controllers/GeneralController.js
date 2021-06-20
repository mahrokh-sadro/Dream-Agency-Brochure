const express = require('express');
const router = express.Router();
const DestinationModel=require('../models/DestinationModel.js');
const heroSectionImg=require('../models/heroSectionImg.js');
const outDoorLocations=require('../models/outDoorLocations.js');
//home page


router.get("/", (req, res) =>{     // Contain request and response parameters
   
 const featuredDestin=DestinationModel.getFeaturedProducts();

 const firsttypeFirstObj= DestinationModel.firsttypeFirstObj();
 const secondTypeFirstObj=DestinationModel.secondTypeFirstObj();
 const thirdTypeFirstObj=DestinationModel.thirdTypeFirstObj();
 const fourthTypeFirstObj=DestinationModel.fourthTypeFirstObj();
 const fifthTypeFirstObj=DestinationModel.fifthTypeFirstObj();
 const sixthTypeFirstObj=DestinationModel.sixthTypeFirstObj();
 const seventhTypeFirstObj=DestinationModel.seventhTypeFirstObj();
 const eighthTypeFirstObj=DestinationModel.eighthTypeFirstObj();
 const ninethTypeFirstObj=DestinationModel.ninethTypeFirstObj();
 const tenthTypeFirstObj=DestinationModel.tenthTypeFirstObj();
 const eleventhTypeFirstObj=DestinationModel.eleventhTypeFirstObj();
 const twelvethTypeFirstObj=DestinationModel.twelvethTypeFirstObj();
 
const torontoBanffObj=outDoorLocations.getTorontoBanffObj();
const getOtherLocationObjs= outDoorLocations.getOtherLocationObjs();

    res.render("home", {
     
     hereSecActiveImg:heroSectionImg.getActiveElement(),
     hereSecOtherImg:heroSectionImg.getOtherElements(),
     featuredDestin,
     firsttypeFirstObj,
     secondTypeFirstObj,
     thirdTypeFirstObj,
     fourthTypeFirstObj,
     fifthTypeFirstObj,
     sixthTypeFirstObj,
     seventhTypeFirstObj,
     eighthTypeFirstObj,
     ninethTypeFirstObj,
     tenthTypeFirstObj,
     eleventhTypeFirstObj,
     twelvethTypeFirstObj,



     torontoBanffObj,
     getOtherLocationObjs

    })
})

module.exports = router;