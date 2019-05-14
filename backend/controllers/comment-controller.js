const mongoose = require('mongoose')

const Comment = mongoose.model('Comment')


exports.create = (req,res)=>{
	const input = req.body
	const comment = new Comment(
	{
		postID: input.postID,
		authorID: input.authorID,
		content: input.content,
		timestamp: input.timestamp
	});

	comment.save((err)=>{
		if(err){
			res.send("error creating comment")
		}else
			res.send("comment created successfully")
	})
}

exports.update = (req, res) => {
  const input = req.body;
  Comment.updateOne({_id: input.commentID, authorID:input.authorID}, {$set: input}, (err, comment) => {
    if (err) {
      res.send('Error updating comment.');
    } else {
      res.send('comment updated successfully.');
    }
    });
};

exports.delete = (req,res) =>{

	Comment.findByIdAndRemove({_id: commentID, authorID:req.body.authorID}, (err,comment) =>{
		if(!err){
			res.send('comment is deleted')
		}else
			res.send('Error deleting comment')
	})
}

exports.test = (req,res) => {
  console.log("comment-controller is working")
  res.send("comment-controller is working")
}

exports.all = (req,res)=>{
	Comment.find({}, (err,post)=>{
		if(err){
			res.send('Error finding posts')
		}else{
			res.send(post)
		}
	})
}