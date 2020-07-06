const express = require("express");
const router = express.Router();
// @route   GET api/contact
// @desc    Get all users contacts
// @access  Private
router.get("/", (req, res) => {
  res.send("Get logged in contacts");
});
// @route   POST api/contact
// @desc    Add contacts
// @access  Private
router.post("/", (req, res) => {
  res.send("Add contact");
});

// @route   PUT api/contact/:id
// @desc    UPdate contacts
// @access  Private
router.put("/:id", (req, res) => {
  res.send("Get logged in contacts");
});

// @route   Delete api/contact/:id
// @desc    Delete contacts
// @access  Private
router.delete("/:id", (req, res) => {
  res.send("delete contacts");
});

module.exports = router;
