const express = require("express")
const mongoose = require('mongoose')
const url = 'mongodb://localhost/MoviesDB'
const router = express.Router()
var app = express();

	

mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology: true })
const con = mongoose.connection


var request = require("request");
app.set("view engine", "ejs")

app.get("/", function(req, res){
	res.render("search");
});
app.get("/results", function(req, res){
	var query = req.query.search;
	var url = "http://www.omdbapi.com/?i=tt3896198&apikey=dd107869&s=" + query
	request(url, function(error, response, body){
		if (!error && response.statusCode == 200) {
			var data = JSON.parse(body)
			res.render("results", {data: data});
		}
	});
});


con.on('open', function(){
	console.log('connected....')
})

app.use(express.json())

const moviesRouter = require('./routes/movies')

app.use('/movies', moviesRouter)

app.listen(3000 ,function(req, res){

	console.log("MOVIE APP HAS STARTED !!!");
});