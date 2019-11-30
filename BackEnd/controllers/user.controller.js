//controller user

const Song = require('../models/user.model');
const App = require('../app');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.song_create = function (req, res) {
    let song = new Song(
        {
            title: req.body.title,
            artist: req.body.artist,
            album: req.body.album,
            year: req.body.year,
            comment: req.body.comment,
            genre: req.body.genre,
            rating: req.body.rating
        }
    );

    song.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Song Created successfully')
    })
};

exports.song_details = function (req, res) {
    Song.finD(req.params.id, function (err, song) {
        if (err) return next(err);
        res.send(song);
    })
};

exports.song_find = function(req, res){
    Song.find({$text: {$search: searchString}}).skip(20).limit(10).exec(function(err, song) {
        if (err) return next(err);
        res.send(song);
     });
}

exports.song_delete = function (req, res) {
    Song.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    });
};

var sorting = {rating:-1};

exports.song_findAll = function(req, res, next){
    Song.find().sort(sorting).limit(10).find(function(err, song) {
            if (err)
                console.log(err);

            res.send(song);
        });
};

exports.song_update = function (req, res) {
    Song.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, song) {
        if (err) return next(err);
        res.send('Song udpated.');
    });
};