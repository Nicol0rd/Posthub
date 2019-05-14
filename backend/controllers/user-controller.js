const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

// get model registered earlier
const User = mongoose.model('User')

exports.signup = (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    birthday: req.body.birthday
  })

  newUser.save((err) => {
    if (err) { return res.send({ success: false }) }
    else { return res.send({ success: true })}
  });
}

exports.login = (req, res) => {
  const input = req.body;
  User.find({email: input.email, password: input.password}, (err, user) => {
    if (err) {
      res.send('Error logging in.');
    } else {
      res.send(user);
    }
  });
};


exports.update = (req,res)=>{
  const input = req.body
  User.update({_id: input.userID}, {$set: input}, (err, user) => {
    if (err) {
      res.send('Error updating user.');
    } else {
      res.send('User updated successfully.');
    }
  });
}

exports.viewAllFriends = (req,res) =>{
  
  User.find({_id:req.body.userID},(err,user)=>{
    if(err){
      res.send(err)
    }else
      res.send(user.friends)
  })
}

exports.test = (req,res) => {
  console.log("User-controller is working")
  res.send("User-controller is working")
}

exports.viewAll = (req, res) => {
  User.find({}, (err, user) => {
    if (err) {
      res.send(err);
    } else {
      res.send(user);
    }
  });
};

exports.sendFriendRequest = (req, res) => {
  const userID = req.body.userID
  const friendID = req.body.friendID
  User.updateOne({_id:friendID},{$push: {friendRequests: userID}},(err,user)=>{
    if(err){
      res.send(err)
    }else
      res.send("added friend request!")
  })
}

exports.acceptFriendRequest = (req,res) =>{
  const userID = req.body.userID
  const sender = req.body.senderID
  User.updateOne({_id:userID},{$pull: {friendRequests: sender}}, (err,user)=>{
    if(err){
      res.send(err)
    }else{
      User.updateOne({_id:userID}, {$push: {friends: sender}}, (err,user)=>{
        if(err){
          res.send(err)
        }else{
        User.updateOne({_id:sender}, {$push: {friends: userID}}, (err,user)=>{
          if(err){
            res.send(err)
          }else{
            res.send("Accepted Friend reqeust")
          }
        })
        }
      })
    }
  })
}

exports.removeFriendRequest = (req,res) =>{ 
  const userID = req.body.userID
  const sender = req.body.senderID
  User.updateOne({_id:userID},{$pull: {friendRequests: sender}}, (err,user)=>{
    if(err){
      res.send(err)
    }else{
      res.send("removed friend request")
    }
  })
}


exports.removeFriend = (req,res)=>{
  const userID = req.body.userID
  const friendID = req.body.friendID
  User.updateOne({_id:userID},{$pull: {friends: friendID}}, (err,user)=>{
    if(err){
      res.send(err)
    }else{
      User.updateOne({_id:friendID},{$pull: {friends: userID}}, (err,user)=>{
        if(err){
          res.send(err)
        }else{
          res.send("friendship over")
        }
      })
    }
  })
}


