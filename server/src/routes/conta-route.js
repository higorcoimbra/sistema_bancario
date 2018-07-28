const express = require('express');
const router = express.Router();
const controller = require("../controllers/conta-controller.js");

router.get('/', controller.get);