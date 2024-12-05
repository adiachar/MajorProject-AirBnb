if(process.env.NODE_ENV != "production"){
    require("dotenv").config();
}

const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const path = require("path");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const app = express();
const port = 8080;
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");


const listingsRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

const dbUrl = process.env.ATLASDB_URL;

const store = MongoStore.create({
    mongoUrl: dbUrl,        //mongoserver
    crypto: {
        secret: process.env.SECRET, //for encription
    },
    touchAfter: 24 * 60 * 60,  // update after 24 hours (in seconds).
});

store.on("error", () => {
    console.log("ERROR in MONGO SESSION STORE");
});

const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    }
}

app.use(session(sessionOptions));
app.use(flash());




main().then(() =>{console.log("connection with db successful");}).catch((err) => {console.log(err);});

async function main() {
    await mongoose.connect(dbUrl);
}



app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "public")));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.failure = req.flash('failure');
    res.locals.currUser = req.user;
    next();
});

app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewsRouter);
app.use("/", userRouter);

app.all('*', (req, res, next) =>{
    next(new ExpressError(404, "page not found"));
});

//error handling middleware
app.use((err, req, res, next) =>{
    let {statusCode = 500, message = "something went wrong"} = err;
    if(err.code == "ENOTFOUND"){
        err.message = "You are offline!";
        res.status(statusCode).render("listings/error.ejs", {err});
    }else{
        res.status(statusCode).render("listings/error.ejs", {err});
    }
});

app.listen(port, ()=>{
    console.log("listening to the port: " +port);
});