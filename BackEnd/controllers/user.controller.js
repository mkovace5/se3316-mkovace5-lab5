//controller user

const Song = require('../models/user.model');
const App = require('../app');
const Fuse = require('fuse.js');

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
    Song.findById(req.params.id, function (err, song) {
        if (err) return next(err);
        res.send(song);
    })
};

exports.song_find = async function(req, res){
    const songs = await Song.find();
    var options = {
        shouldSort: true,
        findAllMatches: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
          "title",
          "artist",
          "album",
          "year",
          "comment",
          "genre"
        ]
      };
      var fuse = new Fuse(songs, options); // "list" is the item array
      res.send(fuse.search(req.params.string));
      console.log(req.params.string);
      
}

exports.song_rating = function(req, res){
    Song.findById(req.params.id, function (err, song) {
        if (err) return next(err);
        res.send(song.rating);
        console.log(song.rating);
    })
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