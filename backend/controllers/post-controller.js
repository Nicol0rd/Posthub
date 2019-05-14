const mongoose = require('mongoose')
const User =  mongoose.model('User')
const Post = mongoose.model('Post')


exports.createInOwnWall = (req,res)=>{
	const input = req.body
	const post = new Post(
	{
		authorID: input.authorID,
		content: input.content,
		wall: input.authorID
	});

	post.save((err)=>{
		if(err){
			res.send("error creating post")
		}else{
			User.updateOne({_id:input.authorID},{$push: {posts: post._id}},(err,user)=>{
				if(err){
					res.send(err)
				}else{
					res.send("created post")
				}
			})
		}
	})
}

exports.createInFriendWall = (req,res)=>{
	const input = req.body
	const post = new Post({
		authorID: input.authorID,
		content: input.content,
		wall: input.friendID
	})

	post.save((err)=>{
		if(err){
			res.send("error creating post")
		}else{
			User.updateOne({_id:input.authorID, friends:{_id:input.friendID}}, {$push: {posts: post._id}}, (err,user)=>{
				if(err){
					res.send("error creating post")
				}else{
					res.send("created post")
				}
			})
		}
	})
}

exports.update = (req, res) => {
  const input = req.body;
  Post.updateOne({_id: input.postID, authorID: input.authorID}, {$set: {content: input.content}}, (err, post) => {
    if (err) {
      res.send('Error updating post.');
    } else {
      res.send('Post updated successfully.');
    }
    });
};


exports.delete = (req,res) =>{
	const input = req.body;
	Post.deleteOne({_id: input.postID, authorID:input.authorID}, (err,pos) =>{
		if(!err){
			User.updateOne({_id:input.authorID},{$pull: {posts: input.postID}}, (err, post) => {
    			if (err) {
    				res.send('Error deleting post.');
   				} else {
    				res.send('Post is deleted')
    			}
  			});
		}else
			res.send('Error deleting post')
	})
}

exports.findAllByUser = (req,res)=>{
	Post.find({authorID: req.body.authorID}, (err,post)=>{
		if(err){
			res.send('Error finding posts')
		}else{
			res.send(post)
		}
	})
}

exports.findAllPostsInWall = (req,res)=>{
	Post.find({wall: req.body.userID}, (err,post)=>{
		if(err){
			res.send('Error finding posts')
		}else{
			res.send(post)
		}
	})
}


exports.viewAll = (req, res) => {
  Post.find({}, (err, post) => {
    if (err) {
      res.send(err);
    } else {
      res.send(post);
    }
  });
};

exports.test = (req,res) => {
  console.log("post-controller is working")
  res.send("post-controller is working")
}
