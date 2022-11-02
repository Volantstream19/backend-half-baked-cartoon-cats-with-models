const { Router } = require('express');
const { cats } = require('../cats-data');
const CartoonCat = require('../models/CartoonCat.js');

// TODO -- update this file to use your database and models instead of hard-coded cats data
// all tests should still pass
module.exports = Router()
  .get('/', async (req, res) => {
    const allCats = await CartoonCat.getAll();
    const filtered = allCats.map(({ id, name }) => ({ id, name }));
    res.json(filtered);
  })
  .get('/:id', async (req, res) => {
    const singleCat = await CartoonCat.getById(req.params.id);
    res.json(singleCat);
  });
