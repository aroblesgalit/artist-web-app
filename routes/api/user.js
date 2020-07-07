const db = require("../../models");
const passport = require("../../config/passport");
const router = require("express").Router();

router.post("/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
    res.redirect("/admin");
});

router.post("/signup", function (req, res) {
    console.log("Signing up user...");
    db.User.create({
        username: req.body.username,
        password: req.body.password
    })
        .then(function (dbUser) {
            console.log("Signup successfull...", dbUser);
            res.redirect(307, "/api/user/login");
        })
        .catch(function (err) {
            console.log("Something went wrong during signup...", err);
            res.status(401).json(err);
        });
});

router.get("/logout", function (req, res) {
    req.logout();
    req.session.destroy(function (err) {
        res.json({})
    });
});

router.get("/user_data", function (req, res) {
    if (!req.user) {
        res.status(401).json({});
    } else {
        res.json({
            id: req.user._id,
            username: req.user.username
        })
    }
});

// Get user
router.get("/", function (req, res) {
    db.User
        .findOne({ username: "johndoe" })
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err));
})

module.exports = router;