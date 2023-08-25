const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios')

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {

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




router.post('/', (req, res) => {
  const newPlant = req.body;
  const queryText = `INSERT INTO plant ("name", "kingdom", "clade", "order", "family", "subfamily", "genus")
                    VALUES ($1, $2, $3, $4, $5, $6, $7)`;
  const queryValues = [
    newPlant.name,
    newPlant.kingdom,
    newPlant.clade,
    newPlant.order,
    newPlant.family,
    newPlant.subfamily,
    newPlant.genus,
  ];
  pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(201); })
    .catch((err) => {
      console.log('Error completing SELECT plant query', err);
      res.sendStatus(500);
    });
});