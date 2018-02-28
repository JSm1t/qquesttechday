const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');

router.get('/profile', (req, res, next) => {
  if(!req.query.name){
    let err = new Error('A name is required to search for profiles');
    err.status = 400;
    return next(err);
  }

  let query = Profile.findOne({ 'name': req.query.name });
  query.exec((err, person) => {
    if (err) { return next(err); }

    console.log('Found the following person', person);
    res.send(person);
  });
});

module.exports = router;
