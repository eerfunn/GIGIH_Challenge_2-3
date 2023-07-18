const { Music } = require("../models/music");
const { Artist } = require("../models/artist");
const { Playlist } = require("../models/playlist");
const {
  getArtistsById,
  updateArtistMusicListData,
  findAllArtistsData,
} = require("../data/artistData");

const updateArtistMusicListService = async (artistId, newMusic) => {
  try {
    const artist = await getArtistsById(artistId);
    console.log("Artist Id: ", artistId);
    console.log("Artist music status:", artist);

    if (!artist) {
      throw new Error("Cannot find artist");
    } else {
      updateArtistMusicListData(artistId, newMusic);
    }
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const findAllArtistsService = async () => {
  try {
    findAllArtistsData();
  } catch (error) {
    throw new Error(error);
  }
};
module.exports = {
  updateArtistMusicListService,
  findAllArtistsService,
};
