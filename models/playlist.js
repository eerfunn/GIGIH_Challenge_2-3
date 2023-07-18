const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playlistSchema = new Schema({
  title: String,
  cover: String,
  music: {
    type: Schema.Types.ObjectId,
    ref: "musics",
  },
  author: String,
});
const Playlist = mongoose.model("playlists", playlistSchema);

module.exports = { Playlist };
