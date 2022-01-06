const { urlencoded } = require("express");

const InspModel = {
  inspirations: [
    {
      id: 111,
      title: "Hotel One Toronto-Piccadilly,In the heart of downtown",
      location: "Jasper",
      img: "../img/111.jpg",
    },
    {
      id: 112,
      title: "Stylish Apartment with a Patio close to the beach",
      location: "Texas",
      img: "../img/112.jpg",
    },
    {
      id: 113,
      title: "Luxurious Resorts with 5 Indoor Pools and Beach Access!",
      location: "Banff",
      img: "../img/113.jpg",
    },
    {
      id: 114,
      title: "Trifecta Golf Villa Central to CCU and M Beach",
      location: "Vancouver",
      img: "../img/114.jpg",
    },
    {
      id: 115,
      title: "Jasper Inn Murrells Inlet/Myrtle Beach Area",
      location: "Jasper",
      img: "../img/115.jpg",
    },
    {
      id: 116,
      title: "Newly Remodeled Cliffs Cottage in Princeville condo",
      location: "Toronto",
      img: "../img/116.jpg",
    },
  ],

  getAllInspiration() {
    return this.inspirations;
  },

  getAnInspiration(id) {
    return this.inspirations.find((insp) => insp.id === id);
  },
};

module.exports = InspModel;
