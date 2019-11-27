//route

const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const user_controller = require('../controllers/user.controller');


// a simple test url to check that all of our files are communicating correctly.
router.put('/api/secure/song', );
router.post('/api/secure/song/:id', );
router.get('/api/open/song', ally, );
router.get('/api/open/search', );
router.get('/api/open/reviews/:id', );
router.put('/api/secure/add-review/:id', );
router.post('/api/admin/copyright/:id', );
router.get('/api/admin/copyright', );
router.post('/api/admin/deactivate/:id', );

module.exports = router;