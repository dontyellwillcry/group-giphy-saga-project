const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios')

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {

    console.log('in GET')
    const searchParam = 'puppy'
    const apiKey = process.env.GIPHY_API_KEY

    axios.get(`https://api.giphy.com/v1/gifs/search?q=${'puppy'}&api_key=${apiKey}`)
    .then( response => {
        res.send(response.data)
    })
    .catch( error => {
        console.log('error in search router get:', error)
    })
});

module.exports = router;