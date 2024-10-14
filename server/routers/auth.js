const express = require('express');
const router = express.Router();

router.get('/auth', (req, res) => {
    res.send('hello from auth');
});

module.exports = router;