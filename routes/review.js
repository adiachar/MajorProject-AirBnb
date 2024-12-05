const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const {isLoggedIn, isOwner, isAuthor} = require("../middleware.js");
const reviewControl = require("../controllers/review.js");

//post review rout
router.post("/", isLoggedIn, wrapAsync(reviewControl.createReview));

//Delete review rout
router.delete("/:reviewId", isAuthor, isLoggedIn, wrapAsync(reviewControl.deleteReview));

module.exports = router;