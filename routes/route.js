const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', (req, res) => {
    res.send({message: 'Hi Usman'});
});
router.get('/login/google', passport.authenticate('google',{
    scope:['profile','email']
}));

router.get('/google/redieract', passport.authenticate('google'));

router.get('/api/current-user', (req, res) => {
    res.send(req.user);
});
router.get('/api/logout', (req, res) => {
    req.logout();
    res.send({message: "Logout Successfully"})
});
module.exports = router;
