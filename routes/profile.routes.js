const express = require('express');
const router = express.Router();

/* GET profile */
router.get("/profile", (req, res, next) => {
  res.render("/profile");
});

module.exports = router;
