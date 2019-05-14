const mongoose = require('mongoose')

const Post = mongoose.model('Post')


exports.create = (req,res)=>{
	const input = req.body
	const post = new Post(
	{
		authorID: input.authorID,
		content: input.content,
		wall: input.userID
	});

	post.save((err)=>{
		if(err){
			res.send("error creating post")
		}else
			res.send("post created successfully")
	})
}

exports.update = (req, res) => {
  const input = req.body;
  Post.update({_id: input.postID, authorID: input.authorID}, {$set: input}, (err, post) => {
    if (err) {
      res.send('Error updating post.');
    } else {
      res.send('Post updated successfully.');
    }
    });
};

exports.delete = (req,res) =>{
	
	Post.findByIdAnRemove({_id: postID, authorID:req.body.authorID}, (err,pos) =>{
		if(!err){
			res.send('Post is deleted')
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

exports.test = (req,res) => {
  console.log("post-controller is working")
  res.send("post-controller is working")
}
