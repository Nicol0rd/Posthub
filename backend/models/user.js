const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId;
const bcrypt = require('bcrypt')


const userSchema = new Schema(
  	{	
  		name: { type: String, required: true },
	    email: { type: String, required: true },
	    password: { type: String, required: true },
	    about: { type: String, required: false },
	    birthday:{ type: Date, required: true },
	    posts:{
	    	type: [ObjectId] //ObjectId ng mga posts
	    },
	    friends:{
	    	type: [ObjectId] //ObjectID ng mga friends
	    },
	    friendRequests:{
	    	type: [ObjectId]
	    }
	},
	{
		collection: 'user'
	}

)

//from auth example in lec class





module.exports = mongoose.model('User', userSchema);