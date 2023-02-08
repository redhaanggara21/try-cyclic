import express from "express";

const router = express.Router();


// fro router
router.post('/customer/register', require("../controller/customer/register"));

module.exports = router;