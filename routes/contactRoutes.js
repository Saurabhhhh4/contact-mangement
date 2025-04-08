const express = require("express");
const router = express.Router();
const {
  getContacts,
  createContact,
  deleteContact,
  updateContact,
  getContact,
} = require("../controllers/contactController");

router.route("/").get(getContacts).post(createContact);
router.route("/:id").put(updateContact).get(getContact).delete(deleteContact);

module.exports = router;
