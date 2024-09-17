const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/getTop10', (req, res) => {
    db.all('SELECT * FROM crypto_data', (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(rows);
        }
    });
});

module.exports = router;
