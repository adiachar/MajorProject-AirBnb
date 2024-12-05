const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js");
const userControl = require("../controllers/user.js");


router.route("/signup")
// get for register
.get((req, res) => {
    res.render("users/signup.ejs");
})
//post for register
.post(wrapAsync(userControl.register));

router.route("/login")
//get for login
.get((req, res) => {
    res.render("users/login.ejs");
})
//post for login
.post(saveRedirectUrl,
    passport.authenticate("local", {failureRedirect: "/login", failureFlash: true}), wrapAsync( userControl.login));

//get for logOut
router.get("/logout", wrapAsync(userControl.logout));   

module.exports = router;