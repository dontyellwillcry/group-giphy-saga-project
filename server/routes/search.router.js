const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios')

const router = express.Router();

let searchParam = ''

// return all favorite images
router.get('/', (req, res) => {

    console.log('in GET')
    
    const apiKey = process.env.GIPHY_API_KEY
    console.log('searchParam is:', searchParam)

    axios.get(`https://api.giphy.com/v1/gifs/search?q=${searchParam}&api_key=${apiKey}`)
    .then( response => {
        res.send(response.data)
    })
    .catch( error => {
        console.log('error in search router get:', error)
    })
});

router.post('/', (req, res) => {
    console.log(req.body.query)
    searchParam = req.body.query
})

module.exports = router;