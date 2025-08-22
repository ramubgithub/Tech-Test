const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model("User", UserSchema);

const SubmittedDataExam = new mongoose.Schema({
    stackId: Number,
    attempt: Number,
    totalScore: Number,
    yourScore: Number
});

const SubmittedData = mongoose.model("ExamData", SubmittedDataExam);

module.exports = { User, SubmittedData }