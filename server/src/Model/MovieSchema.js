const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  movieName: {
    type: String,
    require: true,
  },
  movieDescription: {
    type: String,
    require: true,
  },
  movieRate: {
    type: Number,
    require: true,
  },
});

const movieModel = mongoose.model("MovieCollection", movieSchema);
module.exports = movieModel;
