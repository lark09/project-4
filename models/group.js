const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
	user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	name: String,
	photoUrl: String,
    Tasks: [TasksSchema]
}, {
	timestamps: true
});

const TasksSchema = new mongoose.Schema({
    task: String,
    completed: Boolean,
    user_id:{}
})
module.exports = {
    Group: mongoose.model('Group', groupSchema),
    Tasks: mongoose.model('Tasks', TasksSchema)
};

module.exports = mongoose.model('Group', groupSchema);