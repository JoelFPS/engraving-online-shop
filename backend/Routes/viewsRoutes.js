const express = require("express");
const router = express.Router();

router.get('/index', (req, res) => {
    res.render('index'); // Renderuje views/index.ejs
  });

module.exports = router;