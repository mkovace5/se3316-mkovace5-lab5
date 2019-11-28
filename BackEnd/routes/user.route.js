//route

const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const song_controller = require('../controllers/user.controller');


// a simple test url to check that all of our files are communicating correctly.
router.put('/api/secure/song', song_controller.song_create);
router.post('/api/secure/song/:id', );
router.get('/api/open/song', song_controller.song_findAll);
router.get('/api/open/search', );
router.get('/api/open/reviews/:id', );
router.put('/api/secure/add-review/:id', );
router.post('/api/admin/copyright/:id', );
router.get('/api/admin/copyright', );
router.post('/api/admin/deactivate/:id', );

module.exports = router;