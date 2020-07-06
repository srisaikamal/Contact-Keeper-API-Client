const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Contact = require("../models/Contact");
const User = require("../models/User");
const auth = require("../middleware/auth");
// @route   GET api/contact
// @desc    Get all users contacts
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ msg: "server error" });
  }
});
// @route   POST api/contact
// @desc    Add contacts
// @access  Private
router.post(
  "/",
  [auth, [check("name", "name is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;

    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });

      const contact = await newContact.save();

      res.json(contact);
    } catch (err) {
      console.log(err.message);
      res.status(500).send("server error");
    }
  }
);

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
