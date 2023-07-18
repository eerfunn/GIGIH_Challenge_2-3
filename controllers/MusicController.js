const { Music } = require("../models/music");
const { Artist } = require("../models/artist");
const { Playlist } = require("../models/playlist");
const {
  findAllMusics,
  findMusic,
  updateMusicPlaycountService,
} = require("../services/musicService");
const { addMusicData } = require("../data/musicData");
const { getArtistsByName } = require("../data/artistData");
const { updateArtistMusicListService } = require("../services/artistService");

const home = (req, res) => {
  try {
    res.status(200).json({
      message: "Hello World",
      statusCode: 200,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong!",
      statusCode: 500,
      error: error,
    });
  }
};

const getAllMusics = async (req, res) => {
  try {
    const data = await findAllMusics();
    console.log(data);
    res.status(200).json({
      message: "Success Get All Musics!",
      statusCode: 200,
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong!",
      statusCode: 500,
      error: error,
    });
  }
};
const getMusic = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const data = await findMusic(id);
    if (!data) {
      res.status(404).json({
        message: "Music didn't exist!",
        statusCode: 404,
      });
    } else {
      res.status(200).json({
        message: "Success Get Music!",
        statusCode: 200,
        data: data,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong!",
      statusCode: 500,
      error: error,
    });
  }
};

const playMusic = async (req, res) => {
  const id = req.params.id;
  try {
    console.log("Parameter:", req.params);
    const music = await findMusic(id);
    let str = music.url.split("/")[4];
    let baka = str.substring(0, str.indexOf("?"));
    console.log(baka);
    updateMusicPlaycountService(id);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(
      "<div><iframe style='border-radius:12px' src=" +
        `https://open.spotify.com/embed/track/${baka}?utm_source=generator` +
        "width='100%' height='352' frameBorder='0' allowfullscreen=''allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe></div>"
    );
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong!",
      statusCode: 500,
      error: error,
    });
  }
};

const addMusic = async (req, res) => {
  const { title, artists, url } = req.body;
  try {
    const isArtistExist = await getArtistsByName(artists);
    if (!isArtistExist) {
      res.status(404).json({
        message: "Artist doesn't exist!",
        statusCode: 404,
      });
    } else {
      const musicData = await addMusicData(title, isArtistExist._id, url);
      await updateArtistMusicListService(isArtistExist._id, musicData._id);
      res.status(201).json({
        message: "Success Add New Music!",
        statusCode: 201,
        data: musicData,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong!",
      statusCode: 500,
      error: error,
    });
  }
};

module.exports = {
  home,
  getAllMusics,
  getMusic,
  playMusic,
  addMusic,
};
