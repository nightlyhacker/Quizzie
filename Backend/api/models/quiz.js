const mongoose = require("mongoose");
const Admin = require("./admin");
const Questions = require("./question");
const User = require("./user");

const QuizSchema = new mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	quizName: { type: String, required: true },
	quizCode: { type: String },
	adminId: { type: mongoose.Schema.Types.ObjectID, ref: "Admin" },
	quizType: { type: String },
	usersParticipated: [
		{
			userId: { type: mongoose.Schema.Types.ObjectID, ref: "User" },
		},
	],
	usersEnrolled: [
		{
			userId: { type: mongoose.Schema.Types.ObjectID, ref: "User" },
		},
	],
	quizDate: {
		type: Date,
	},
	quizTime: {
		type: String,
	},
	quizDuration: {
		type: String,
	},
});

module.exports = mongoose.model("Quiz", QuizSchema);
