const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const musicSchema = new Schema({
  title: String,
  coverimage: String,
  artists: {
    type: Schema.Types.ObjectId,
    ref: "artists",
  },
  playcount: Number,
  url: String,
});
const Music = mongoose.model("musics", musicSchema);

module.exports = { Music };
