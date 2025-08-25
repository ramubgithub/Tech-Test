const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/allRoutes");
const cookieParser = require("cookie-parser");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
const PORT = 5000;

app.use(express.urlencoded({extended: true}));
app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.options("*", cors());

mongoose.connect(process.env.MONGO_URI, {
    family: 4
})
.then(() => console.log("MongoDB connected successfully!"))
.catch((e) => console.error("MongoDB connection error ", e));

app.get("/", (req, res) => {
    res.send("Api is running...");
});

app.use('/', router);

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));