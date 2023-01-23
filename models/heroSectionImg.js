const { urlencoded } = require("express");

const heroSectionImg = {
  images: [
    {
      id: 1,
      img: "../img/heroSecImg/10.jpg",
    },
    {
      id: 2,
      img: "../img/heroSecImg/6.jpg",
    },
    {
      id: 3,
      img: "../img/heroSecImg/7.jpg",
    },
    {
      id: 4,
      img: "../img/heroSecImg/9.jpg",
    },
  ],

  getActiveElement() {
    return this.images[0];
  },

  getOtherElements() {
    return this.images.filter((image) => image.id !== 1);
  },
};

module.exports = heroSectionImg;
