const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artistSchema = new Schema({
  name: [String],
  photo: String,
  music: [
    {
      type: Schema.Types.ObjectId,
      ref: "musics",
    },
  ],
  socialMedia: [String],
});
const Artist = mongoose.model("artists", artistSchema);

module.exports = { Artist };
