const Listing = require("../models/listing.js");
const ExpressError = require("../utils/ExpressError.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding'); 

module.exports.indexPage =  async (req, res) =>{
    const allListings = await Listing.find();
    res.render("listings/index.ejs", {allListings});
}

module.exports.createListingPage = async (req, res) =>{
    res.render("listings/new.ejs");
}

module.exports.createListing = async (req, res, next) =>{
    let url = req.file.path;
    let filename = req.file.filename;
    console.log(url, "...", filename);
    let newListing = new Listing(req.body.listing); // remember this, this is very usefull. consider the ejs file also.
    newListing.owner = req.user._id;
    newListing.image = {url, filename};
    await newListing.save();
    req.flash('success', 'New Listing added Successfully');
    res.redirect("/listings");
}

module.exports.showListing = async (req, res) =>{
    const {id} = req.params;
    const listing = await Listing.findById(id).populate({path: "reviews", populate: {path: "author", }, }).populate("owner");
    if(!listing){
        req.flash("failure", "listing does not exist");
        res.redirect("/listings");
    }else{
        res.render("listings/show.ejs", {listing});
    }
}

module.exports.editListing = async (req, res) =>{
    let {id} = req.params;
    const list = await Listing.findById(id);
    let listImage = list.image.url.replace("/upload", "/upload/h_300,w_300");
    res.render("listings/edit.ejs", {list, listImage});
}

module.exports.updateListing = async (req, res) => {
    let {id} = req.params;
    if(!req.body){
        throw new ExpressError(400, "validation Error");
    }
    console.log({...req.body.listing});
    let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing} , {new: true});
    if(typeof req.file !== "undefined"){
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = {url, filename};
        await listing.save();
    }
    req.flash('success', 'Listing updated Successfully');
    res.redirect("/listings");
}

module.exports.deleteListing = async (req, res) => {
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash('success', 'Listing deleted Successfully');
    res.redirect("/listings");
}