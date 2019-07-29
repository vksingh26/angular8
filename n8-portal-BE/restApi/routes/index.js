const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('test');
    res.send('It works like a charm !!!');
});

module.exports = router;