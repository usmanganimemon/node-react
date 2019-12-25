const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', (req, res) => {
    res.send({message: 'Hi Usman'});
});
router.get('/login/google', passport.authenticate('google',{
    scope:['profile','email']
}));

router.get('/google/redieract', passport.authenticate('google'))

module.exports = router;
