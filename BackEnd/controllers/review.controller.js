//controller user

const Review = require('../models/review.model');
const Fuse = require('fuse.js');


exports.review_create = function (req, res) {
    let review = new Review(
        {
            songid: req.body.songid,
            user: req.body.user,
            rating: req.body.rating,
            reviews: req.body.reviews
        }
    );

    review.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Review Created successfully')
    })
};

exports.review_details = async function (req, res) {
    const reviews = await Review.find();
    var options = {
        caseSensitive: true,
        threshold: 0,
        location: 0,
        distance: 0,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
          "songid"
        ]
    }
    var fuse = new Fuse(reviews, options); // "list" is the item array
      res.send(fuse.search(req.params.id));
      console.log(req.params.id);

};


exports.review_findAll = function(req, res, next){
    Review.find(function(err, review) {
            if (err)
                console.log(err);

            res.send(review);
        });
};
