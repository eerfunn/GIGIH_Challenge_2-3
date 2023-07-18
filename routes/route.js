const express = require("express");
const router = express.Router();
const {
  home,
  addMusic,
  getAllMusics,
  getMusic,
  playMusic,
} = require("../controllers/MusicController");

// Song Routes
// Basic route for home
router.get("/", home);
// route to get all musics from database (Sorted by the most played)
router.get("/musics", getAllMusics);
// route to get one music by id from database
router.get("/music/:id", getMusic);
// route to play music by id from database, this using Official Spotify API to play the music
router.get("/music/:id/play", playMusic);
// route to add music to the database
router.post("/music", addMusic);

module.exports = router;
