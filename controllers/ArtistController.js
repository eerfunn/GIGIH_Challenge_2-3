const { Music } = require("../models/music");
const { Artist } = require("../models/artist");
const { Playlist } = require("../models/playlist");
const { findAllArtistsService } = require("../services/artistService");

const getAllArtists = (req, res) => {
  try {
    findAllArtistsService();
    res.status(200).json({
      message: "Success Get All Artists!",
      statusCode: 200,
      data: findAllArtistsService,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong!",
      statusCode: 500,
      error: error,
    });
  }
};
module.exports = {
  getAllArtists,
};
