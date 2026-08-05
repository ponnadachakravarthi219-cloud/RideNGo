import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("RideNGo Backend Running 🚀");
});

mongoose.connect(process.env.MONGO_URI)
.then(() => {

    console.log("MongoDB Connected");

    app.listen(process.env.PORT, () => {

        console.log(`Server Running on ${process.env.PORT}`);

    });

})
.catch(err => console.log(err));