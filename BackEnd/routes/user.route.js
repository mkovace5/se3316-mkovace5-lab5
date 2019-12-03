//route

const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const song_controller = require('../controllers/user.controller');
const review_controller = require('../controllers/review.controller');


// a simple test url to check that all of our files are communicating correctly.
router.post('/api/secure/song', song_controller.song_create);
router.put('/api/secure/song/:id', song_controller.song_update);
router.get('/api/open/song', song_controller.song_findAll);
router.get('/api/open/search/:string', song_controller.song_find);
router.get('/api/open/reviews/:id', review_controller.review_details);
router.post('/api/secure/add-review', review_controller.review_create);
router.get('/api/getRating/:id', song_controller.song_rating);
router.get('/api/open/song-details/:id', song_controller.song_details);
router.post('/api/open/dmca', song_controller.dmca_create);
router.get('/api/admin/song-dmca/:id', song_controller.dmca_details);
//router.post('/api/admin/copyright/:id', );
//router.get('/api/admin/copyright', );

module.exports = router;