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

userSchema.methods.comparePassword = function(password, callback) {
  bcrypt.compare(password, this.password, callback);
}

userSchema.pre('save', function(next) {
  const user = this;

  if (!user.isModified('password')) return next();

  return bcrypt.genSalt((saltError, salt) => {
    if (saltError) { return next(saltError) }

    return bcrypt.hash(user.password, salt, (hashError, hash) => {
      if (hashError) { return next(hashError) }
      user.password = hash;
      return next()
    })
  })
})

module.exports = mongoose.model('User', userSchema);