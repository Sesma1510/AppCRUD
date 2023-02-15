const express = require("express");
const router = express.Router();

router.get("/dashboard", (req, res, next) => {
  res.render("admin/dashboard", { userInSession: req.session.currentUser });
});

router.get("/dashboard/server", (req, res, next) => {
  res.render("admin/server", { userInSession: req.session.currentUser });
});

module.exports = router;
