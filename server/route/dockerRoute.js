const express = require('express');
const router = express.Router();
const dockerController = require('../controller/dockerController');

// define routes with controllers
router.get('/docker', dockerController.docker);

// placeholder
module.exports = router;
