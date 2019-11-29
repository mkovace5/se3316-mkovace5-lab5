//controller user

const Review = require('../models/review.model');


exports.review_create = function (req, res) {
    let review = new Review(
        {
            songid: req.body.songid,
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

exports.review_details = function (req, res) {
    Review.findById(req.params.id, function (err, review) {
        if (err) return next(err);
        res.send(review);
    })
};


exports.review_findAll = function(req, res, next){
    Review.find(function(err, review) {
            if (err)
                console.log(err);

            res.send(review);
        });
};
