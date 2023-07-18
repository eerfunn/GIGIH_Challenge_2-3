const { Music } = require("../models/music");
const { Artist } = require("../models/artist");
const { Playlist } = require("../models/playlist");
const {
  findAllMusicsData,
  findMusicData,
  updateMusicPlaycountData,
} = require("../data/musicData");

const findAllMusics = async () => {
  try {
    const data = await findAllMusicsData();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const findMusic = async (id) => {
  console.log("MusicID: ", id);
  try {
    if (!id) {
      throw new Error("Insufficient Parameter");
    }

    const data = await findMusicData(id);
    console.log("Service " + data);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
const updateMusicPlaycountService = async (id) => {
  console.log("Music ID: " + id);
  try {
    if (!id) {
      throw new Error("Insufficient Parameter");
    }

    const data = await updateMusicPlaycountData(id);
    console.log("Service " + data);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports = {
  findAllMusics,
  findMusic,
  updateMusicPlaycountService,
};
