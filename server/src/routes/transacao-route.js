const express = require('express');
const router = express.Router();
const controller = require("../controllers/transacao-controller.js");

router.get('/', controller.get);
router.post('/', controller.post);

module.exports = router;