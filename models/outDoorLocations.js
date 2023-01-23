const { urlencoded } = require("express");

const outDoorLocations = {
  locations: [
    {
      id: 20,
      location: "Toronto",
      large_img: "../img/locationImg/4.jpg",
      flag: "../img/locationImg/canada.jpg",
    },
    {
      id: 21,
      location: "Banff",
      large_img: "../img/locationImg/5.jpg",
      flag: "../img/locationImg/canada.jpg",
    },
    {
      id: 22,
      location: "Niagra Falls",
      large_img: "../img/locationImg/9.jpg",
      flag: "../img/locationImg/canada.jpg",
    },
    {
      id: 23,
      location: "New york",
      large_img: "../img/locationImg/1.jpg",
      flag: "../img/locationImg/us.jpg",
    },
    {
      id: 24,
      location: "Vancouver",
      large_img: "../img/locationImg/6.png",
      flag: "../img/locationImg/canada.jpg",
    },
  ],

  getTorontoBanffObj() {
    return this.locations.filter((element) => {
      if (element.location === "Toronto" || element.location === "Banff")
        return element;
    });
  },
  getOtherLocationObjs() {
    return this.locations.filter((element) => {
      if (element.location !== "Toronto" && element.location !== "Banff")
        return element;
    });
  },
};

module.exports = outDoorLocations;
