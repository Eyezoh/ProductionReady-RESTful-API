const express = require('express');
const data = require('../models/data');
const router = express.Router();

router.get('/products',(req,res)=>{
    res.json(data.products[5]);
});

module.exports = router;