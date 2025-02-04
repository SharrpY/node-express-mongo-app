const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A tour need a name!"], // second parameter is the error message
    unique: true, // name should be unique
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, "A tour need a price!"],
  },
});

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
