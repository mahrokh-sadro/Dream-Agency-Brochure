const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const UserModel = require("../models/UserModel.js");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
const bcrypt = require("bcryptjs");

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  UserModel.findOne({ email })
    .then((user) => {
      const errors = [];

      if (user == null) {
        errors.push("Sorry, your email and/or password incorrect");
        res.render("login", {
          errors,
        });
      } else {
        bcrypt
          .compare(password, user.password)
          .then((isMatch) => {
            if (isMatch) {
              req.session.user = {
                user: user.name,
                email: user.email,
                password: user.password,
              };

              res.redirect("/");
            } else {
              errors.push("Sorry, your email and/or password incorrect ");
              res.render("login", {
                errors,
              });
            }
          })
          .catch((err) => console.log(`Error ${err}`));
      }
    })
    .catch((err) => console.log(`Error ${err}`));
});

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

router.get("/logout", (req, res) => {
  //   res.clearCookie("token");
  req.session.destroy();
  res.redirect("/user/login");
});

module.exports = router;
