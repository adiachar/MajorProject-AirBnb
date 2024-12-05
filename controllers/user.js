const User = require("../models/user.js");

module.exports.register = async (req, res) => {
    try{
        let {username, email, password} = req.body;
        const newUser = new User({username, email});
        const registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (err) => {
            if(err){
                return next(err);
            }else{
                req.flash('success', 'Registered Successfully');
                res.redirect('/listings');
            }
        });
    }catch(err){
        req.flash('failure', err.message);
        res.redirect("/signup");
    }
}

module.exports.login = async (req, res) => {
    req.flash("success", "welcome back to wandurlust");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
}

module.exports.logout = async (req, res) => {
    req.logout((err) => {
        if(err){
            return next(err);
        }
        req.flash("success", "you are logged out now");
        res.redirect("/login");
    });
}