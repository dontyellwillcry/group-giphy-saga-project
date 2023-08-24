const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios')

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const apiKey = process.env.GIPHY_API_KEY

  axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}`)
  .then((response) => {
    res.send(response.data)
  })
  .catch((error) => {
    console.log('Error retreiving Search,', error)
    res.sendStatus(500)
  });
});

// add a new favorite
router.post('/', (req, res) => {
  res.sendStatus(200);
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
