const { Music } = require("../models/music");

const findAllMusicsData = async () => {
  // const data = await Music.find().populate("artists", "name");
  const data = await Music.find()
    .populate("artists", "name")
    .sort({ playcount: -1 });
  return data;
};

const findMusicData = async (id) => {
  const data = await Music.findOne({ _id: id }).populate("artists", "name");
  console.log("Data " + data);
  return data;
};
const addMusicData = async (title, artists, url) => {
  const data = new Music({
    title: title,
    coverimage: "none",
    artists: artists,
    playcount: 0,
    url: url,
  });
  const value = await data.save();
  return value;
};
const updateMusicPlaycountData = (id) => {
  Music.findByIdAndUpdate(id, { $inc: { playcount: 1 } }, { new: true })
    .exec()
    .then((response) => {
      console.log("Music Played, Incrementing Play Counts!", response);
    });
};
module.exports = {
  findAllMusicsData,
  findMusicData,
  addMusicData,
  updateMusicPlaycountData,
};
