const express = require('express');
const router = express.Router();



router.post("/login", (req, res) => {

})


router.post("/registration", (req, res) => {

    let name_err;
    let lastname_err;
    let email_err;
    let password_err;
    let repassword_err;
    let passwordConf_err;
    let passLength_err;
    let emailRegMatch_err;
    const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    const passwordRegexp=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    if (req.body.reg_name == "") {
        name_err = "Please enter a first name";
    }

    if (req.body.reg_lastname == "") {
        lastname_err = "Please enter a last name";
    }

    if (req.body.reg_email == "") {
        email_err = "Please enter an email";
    }

    if (req.body.reg_password == "") {
        password_err = "Please enter a password";
    }

    if (req.body.reg_repassword == "") {
        repassword_err = "Please enter the confirmation password";
    }
    if (req.body.reg_password !== req.body.reg_repassword) {
        passwordConf_err = "confirmation password does not match";
    }
    if (req.body.reg_password && passwordRegexp.test(req.body.reg_password) !== true) {
        passRegMatch_err = "Pssword must be more than 8 chars ";
    }
    if (emailRegexp.test(req.body.reg_email) !== true) {
        emailRegMatch_err = "Email is not valid.";
    }
    //preserving data
    let name = req.body.reg_name;
    let lastname = req.body.reg_lastname;
    let email = req.body.reg_email;


    //This represents failed validation
    if (name_err || lastname_err || email_err
        || password_err || repassword_err || passwordConf_err || passRegMatch_err) {
        res.render("registration", {

            name_err,
            lastname_err,
            email_err,
            password_err,
            repassword_err,
            passwordConf_err,
            passRegMatch_err,
            emailRegMatch_err,
            name,
            lastname,
            email
        })
    }


    //passed validation 
    else {
        //go back to www.domainname.com/
        // res.redirect("/")//

        res.redirect("/"); // sending a GET req to specified route
    }
})
router.get("/registration", (req, res) => {
    res.render("registration");
})
router.get("/login", (req, res) => {
    res.render("login");
})



module.exports = router;
///////////////////////////////