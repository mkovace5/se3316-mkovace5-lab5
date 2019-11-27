//app.js

const express = require('express');
const bodyParser = require('body-parser');
// initialize our express app
const user = require('./routes/user.route'); // Imports routes for the products
const app = express();
var User = require('./app/userModel'),
	mongoose = require('mongoose'),
	nev = require('email-verification')(mongoose);
mongoose.connect('mongodb+srv://mkovace5:123Lozinka321@gettingstarted-lllun.mongodb.net/music?retryWrites=true&w=majority');

mongoose.Promise = global.Promise;

nev.configure({
	verificationURL: 'http://localhost:4200/email-verification/${URL}',
	persistentUserModel: User,
	tempUserCollection: 'localhost:4200_tempusers',

	transportOptions: {
		service: 'Gmail',
		auth: {
			user: 'softwareisfun@gmail.com',
			pass: 'supersecretpassword'
		}
	},
	verifyMailOptions: {
		from: 'Do Not Reply <softwareisfun_do_not_reply@gmail.com>',
		subject: 'Please confirm account',
		html: 'Click the following link to confirm your account:</p><p>${URL}</p>',
		text: 'Please confirm your account by clicking the following link: ${URL}'
	}
}, function(error, options){	
});

ev.generateTempUserModel(User);

var TempUser = require('./app/tempUserModel');
nev.configure({
	tempUserModel: TempUser
}, function(error, options){
});

var email = "...",
    password = "...";
 
var newUser = User({
    email: email,
    password: password
});
 
nev.createTempUser(newUser, function(err, existingPersistentUser, newTempUser) {
    // some sort of error
    if (err)
        // handle error...
 
    // user already exists in persistent collection...
    if (existingPersistentUser)
        // handle user's existence... violently.
 
    // a new user
    if (newTempUser) {
        var URL = newTempUser[nev.options.URLFieldName];
        nev.sendVerificationEmail(email, URL, function(err, info) {
        	if(err){}
        });
 
    // user already exists in temporary collection...
    } else {
        // flash message of failure...
    }
});

// sync version of hashing function
var myHasher = function(password, tempUserData, insertTempUser, callback) {
  var hash = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  return insertTempUser(hash, tempUserData, callback);
};
 
// async version of hashing function
myHasher = function(password, tempUserData, insertTempUser, callback) {
  bcrypt.genSalt(8, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      return insertTempUser(hash, tempUserData, callback);
    });
  });
};

var ur; = '...';
nev.confirmTempUser(url, function(err, user) {
	if(err)

	if (user) {
		nev.sendConfirmationEmail(user['email_field_name'], function(err, info){

		});
	}
	else{
		//redirect to sign-up
	}
});

var email = '...';
nev.resendVerificationEmail(email, function(err, userFound) {
	if(err){

	}
	if(userFound){

	}
	else{

	}
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/users', user);
app.use("/mina/", express.static('FrontEnd'));


let port = 8080;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});



