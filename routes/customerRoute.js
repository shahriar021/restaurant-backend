const express = require("express");
const customerController = require("../controllers/customerController");
const router = express.Router();

router.post("/createCustomer", customerController.customerSign);

module.exports = router;
