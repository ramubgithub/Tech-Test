const { User, SubmittedData } = require('../models/allModels.js');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const isProduction = process.env.NODE_ENV === "production";

const Credentials = async(req, res) => {
    const { email, password } = req.body;

    if(!email || !password) {
        return res.status(400).json({message: "All fields are required!"});
    }

    try {
        const exists = await User.findOne({email});

        if(exists) {
            return res.status(409).json({message: "User already exists!"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({email, password: hashedPassword});
        await user.save();
        res.status(201).json({message: "User credentials successfully saved!"});
    }
    catch(err) {
        res.status(500).json({message: "Internal server error..."});
    }
}

const Login = async(req, res) => {
    const { email, password } = req.body;

    try {
        const key = process.env.SECRETKEY;
        if(!email || !password) {
            return res.status(400).json({message: "All fields are required!"});
        }

        const exists = await User.findOne({email});
        if(!exists) {
            return res.status(404).json({message: "User not found!"});
        }
        else if(!await bcrypt.compare(password, exists.password)) {
            return res.status(401).json({message: "Incorrect Password. Please try again!"});
        }
        const token = jwt.sign({ email }, key, { expiresIn: "1h" });
        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "None",
            secure: isProduction,
            domain: ".onrender.com",
            maxAge: 60 * 60 * 1000
        })
        res.status(200).json({message: "Login successful!"});
    }
    catch(err) {
        res.status(500).json({message: "Internal server error..."});
    }
}

const Logout = (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        sameSite: "None",
        secure: isProduction,
        domain: ".onrender.com"
    });

    res.status(200).json({message: "Successfully logged out!"});
}

const authenticateUser = (req, res) => {
    const token = req.cookies?.token;
    const key = process.env.SECRETKEY;

    if(!token) {
        return res.status(401).json({message: "Token missing or Invalid token!"});
    }

    try {
        const decoded = jwt.verify(token, key);
        req.user = decoded;
        res.status(200).json({message: "Successfully authenticated!"});
    }
    catch(err) {
        res.status(401).json({message: "Token missing or Invalid token!"});
    }
}

const ExamSubmission = async (req, res) => {
    const { stackId, answers } = req.body;

    let totalScore = 0, yourScore = 0;
    answers.forEach(tech => {
        tech.forEach(question => {
            totalScore++;
            if(question.selectedOption === question.correctOption && question.selectedOption) {
                yourScore++;
            }
        })
    })

    try {
        const attempt = await SubmittedData.find({stackId}) || [];
        const newSubmit = new SubmittedData({stackId, attempt: (attempt.length + 1), totalScore, yourScore});
        await newSubmit.save();
        res.status(201).json({message: "Exam details added successfully!", data: {stackId, attempt: (attempt.length + 1), totalScore, yourScore}});
    }
    catch(err) {
        res.status(500).json({message: "Internal server error..."});
    }
}

GetSubmitData = async (req, res) => {
  try {
    const { isActive } = req.body;

    const stackId = isActive === "stack1" ? 1 : 2;

    const results = await SubmittedData.find({ stackId }).sort({yourScore: -1});
    res.json(results);
  } catch (err) {
    console.error("Error fetching results:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { Credentials, Login, Logout, authenticateUser, ExamSubmission, GetSubmitData }