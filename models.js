
var Mongoose = require('mongoose');

//This is the DB schema
var ImgSchema = new Mongoose.Schema({
	"image" : { type: String },
	"hashtag" : { type: String}
});

exports.Img = Mongoose.model('Img', ImgSchema);


