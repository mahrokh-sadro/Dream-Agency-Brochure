const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const UserModel = require("../models/UserModel.js");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

// router.post("/login", (req, res) => {
//   let email_err;
//   let password_err;

//   if (req.body.email == "") {
//     email_err = "Please enter your email";
//   }

//   if (req.body.password == "") {
//     password_err = "Please enter your password";
//   }

//   let email = req.body.email;
//   if (email_err || password_err) {
//     res.render("login", {
//       email_err,
//       password_err,
//       email,
//     });
//   } else {
//     res.redirect("/");
//   }
// });

router.post(
  "/registration",
  [
    check("name", "Name at least should be 3 characters").isLength({ min: 3 }),
    check("email", "Email should be valid").isEmail(),
    check("password", "Password at least should be 6 characters").isLength({
      min: 6,
    }),
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        error: errors.array()[0].msg,
      });
    }
    console.log(req.body);
    const user = new UserModel(req.body);
    user.save((err, user) => {
      if (err) {
        return res.render("registration", {
          error: err,
        });
      }

      return res.render("registration", {
        message: "Success",
        user,
      });
    });
    //  res.redirect("/"); // sending a GET req to specified route
  }
);
router.get("/registration", (req, res) => {
  res.render("registration");
});
router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
