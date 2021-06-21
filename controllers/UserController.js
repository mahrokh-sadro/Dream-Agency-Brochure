const express = require('express');
const router = express.Router();



router.post("/login", (req, res) => {

})


router.post("/registration", (req, res) => {

    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    
    const msg = {
      to: `${req.body.reg_email}`, // Change to your recipient
      from: 'msadrolodabaee@myseneca.ca', // Change to your verified sender
      subject: 'Sending with SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    
    sgMail
      .send(msg)
      .then((response) => {
        console.log(response[0].statusCode)
        console.log(response[0].headers)
      })
      .catch((error) => {
        console.error(error)
      })





    let name_err;
    let lastname_err;
    let email_err;
    let password_err;
    let repassword_err;
    let passwordConf_err;
    let passLength_err;
    let emailRegMatch_err;
    const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

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
    if (req.body.reg_password && req.body.reg_password.length < 6 || req.body.reg_password.length > 12) {
        passLength_err = "Pssword must be between 6 to 12 characters.";
    }
    if (emailRegexp.test(req.body.reg_email) !== true) {
        passRegMatch_err = "Email is not valid.";
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
            passLength_err,
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