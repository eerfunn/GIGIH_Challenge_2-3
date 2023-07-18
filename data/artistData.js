const { Music } = require("../models/music");
const { Artist } = require("../models/artist");
const { Playlist } = require("../models/playlist");

const getArtistsByName = (name) => {
  const data = Artist.findOne({ name: name });
  return data;
};

const getArtistsById = (artistId) => {
  const data = Artist.findOne({ _id: artistId });
  return data;
};

const findAllArtistsData = () => {
  const data = Artist.find().populate("music", "title");
  return data;
};

const updateArtistMusicListData = async (artistId, newMusic) => {
  const artist = await getArtistsById(artistId);
  console.log("Data Layer: ", artist);
  Artist.findByIdAndUpdate(
    artistId,
    { music: [...artist.music, newMusic] },
    { new: true }
  )
    .exec()
    .then((response) => {
      console.log("Previous Music EXIST, adding a to Artist's List:", response);
    });
};
module.exports = {
  getArtistsById,
  getArtistsByName,
  updateArtistMusicListData,
  findAllArtistsData,
};
