const express = require("express");
const { Credentials, Login, authenticateUser, Logout, ExamSubmission, GetSubmitData } = require("../controllers/credentialController");
const router = express.Router();

router.post('/register', Credentials);
router.post('/login', Login);
router.post('/authenticate', authenticateUser);
router.post('/submitdetails', ExamSubmission);
router.post('/getdetails', GetSubmitData);

module.exports = router;