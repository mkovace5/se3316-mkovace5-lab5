//route

const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const song_controller = require('../controllers/user.controller');
const review_controller = require('../controllers/review.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', song_controller.test)
router.post('/api/secure/song', song_controller.song_create);
router.put('/api/secure/song/:id', song_controller.song_update);
router.get('/api/open/song', song_controller.song_findAll);
router.get('/api/open/search', song_controller.song_find);
//router.get('/api/open/reviews/:id', review_controller._getReviews);
router.post('/api/secure/add-review/:id', review_controller.review_create);
//router.post('/api/admin/copyright/:id', );
//router.get('/api/admin/copyright', );
//router.post('/api/admin/deactivate/:id', );

module.exports = router;