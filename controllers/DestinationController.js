const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authentication.js");
const DestinationModel = require("../models/DestinationModel.js");
const InspModel = require("../models/InspModel.js");

router.get("/listing/:id", (req, res) => {
  //fetch the id from the url use the req obj
  const id = parseInt(req.params.id);
  const pic = DestinationModel.getADestination(id);
  res.render("destinationDetails", {
    destination,
  });
});

router.get("/listing", (req, res) => {
  const allDestinations = DestinationModel.getAllDestinations();
  res.render("destinationListing", {
    allDestinations,
  });
});

router.get("/details", (req, res) => {
  res.render("destinationDetails");
});

router.get("/insp", (req, res) => {
  res.render("inspirationListing", {
    insp: InspModel.getAllInspiration(),
  });
});

router.get("/category/:cat", (req, res) => {
  const cat = req.params.cat;
  console.log(cat);
  const destinations = DestinationModel.getAllByProperty(cat);
  console.log(destinations);
  res.render("byPropertyListing", {
    destinations,
  });
});

router.get("/location/:loc", (req, res) => {
  const loc = req.params.loc;
  console.log(loc);
  const destinations = DestinationModel.getAllByLocation(loc);
  console.log(destinations);
  res.render("byLocationListing", {
    destinations,
  });
});

router.get("/explore/:id", (req, res) => {
  const id = req.params.id;
  // console.log(id);
  const pic = id + "+.jpg";
  const pic1 = id + "++.jpg";
  console.log(pic);
  res.render("exploreCanada", {
    pic,
    pic1,
  });
});

module.exports = router;
