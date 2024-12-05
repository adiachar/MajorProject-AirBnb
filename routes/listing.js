const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const listingControl = require("../controllers/listing.js");
const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});

router.route("/")
// index rout
.get(wrapAsync(listingControl.indexPage))
//post Create listing
.post(isLoggedIn, upload.single("listing[image]"), wrapAsync(listingControl.createListing));

//New listing rout
router.get("/new", isLoggedIn, wrapAsync(listingControl.createListingPage));

//Edit rout
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingControl.editListing));

router.route("/:id")
//Show listiong rout
.get(wrapAsync( listingControl.showListing))
//Update rout
.patch(isLoggedIn, isOwner, upload.single("listing[image]"), wrapAsync (listingControl.updateListing))
//DELETE rout
.delete(isLoggedIn, isOwner, wrapAsync(listingControl.deleteListing));

module.exports = router;