import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import moumentRoutes from "./routes/index.js";

dotenv.config();

const app = express();
app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.get('/', (req, res) => {
    res.send("Welcome");
})

app.use('/monument', moumentRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology:  true})
    .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
    .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);