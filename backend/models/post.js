const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const postSchema = new Schema(
	{
		authorID: {	type: ObjectId, required: true },
		wall: { type: ObjectId, required: true },
		content: { type: String, required: true },
		timestamp: { type: Date, required: true, default: Date.now }
	},
	{
		collection: 'post'	
	}
);

module.exports = mongoose.model('Post', postSchema);