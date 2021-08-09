const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const movieModel = require("./src/Model/movieSchema");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://michikogo:1234@movielist.hxuep.mongodb.net/movielistDB?retryWrites=true&w=majority",
  { useNewUserParser: true, useUnifiedTopology: true, useNewUrlParser: true },
  (err) => {
    if (err) {
      console.log("Cannot connect to MongoDB");
    }
    console.log("MongoDB connection established successfully");
  }
);

app.get("/", async (req, res) => {
  const movie = movieModel({
    movieName: "Flipped",
    movieDescription:
      "When they meet in second grade, Juli Baker falls instantly in love with her neighbor, Bryce Loski. Bryce, however, does not feel the spark. From that day forward, he (Callan McAuliffe) tries hard to keep brash and unpredictable Juli (Madeline Carroll) at bay. After six years, she begins to feel that she was wrong about him being the love of her life. Unfortunately, that is just about the time that Bryce begins to think he was wrong about Juli, too.",
    movieRate: 4,
  });
  try {
    await movie.save();
    res.send("[TRIAL] Insert Data");
  } catch (err) {
    console.log(err);
  }
});

app.listen(3001, () => {
  console.log("Server listening to port 3001");
});
