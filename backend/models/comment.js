const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectID = Schema.Types.ObjectId;

const commentSchema = new Schema(
	{
		postID: { type: ObjectID, required: true },
		authorID: { type: ObjectID, required: true },
		content: { type: String, required: true },
		timestamp: { type: Date, required: true, default: Date.now }
	},
	{
		collection: 'comment'
	}
);

module.exports = mongoose.model('Comment', commentSchema);
