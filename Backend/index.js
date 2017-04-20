const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
const cors = require('cors');
const mongoose = require('mongoose');
const user = require('./models/user');

mongoose.connect('mongodb://Andy:taco@ds023465.mlab.com:23465/andrew_hoffmann');	// https://mlab.com/databases/andrew_hoffmann/collections/users 

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 


// Get all of people
app.get('/users',function(req,res){
	user.find().exec((err,response)=>{
		if(err) return res.json(err);
		res.json(response);
	})
})

// post a new person
app.post('/users',function(req,res){
	let newuser = new user();
		newuser.name = req.body.name;
		newuser.age = req.body.age;
		newuser.likeJS = req.body.likeJS;

	newuser.save(err=>{
		if(err) return res.json(err);

	// after add new person, request updated data
	user.find().exec((err,response)=>{
		if(err) return res.json(err);
		res.json(response);
	})
	})
})

// get a single person
app.get('/users/:id',function(req,res){
	let id = req.params.id
	user.findOne({_id:id}).exec((err,response)=>{	
		if(err) return res.json(err);
		res.json(response);
	})
})

// delete a person
app.delete('/users/:id',function(req,res){
	let id = req.params.id
	user.remove({_id:id}).exec((err)=>{
		if(err) return res.json(err);

	// after add new person, request updated data
	user.find().exec((err,response)=>{
		if(err) return res.json(err);
		res.json(response);
	})
})
})

// Start the server
app.listen(port, function() {
  console.log(`Listening on port ${port}`);
})