const express = require('express');
const publicController = require('../controller/publicController');
const router = express.Router();

// Define routes with parameters
router.get('/api/v1/public/diversity', publicController.publicDiversity);
router.get('/api/v1/public/dataRefresh', publicController.publicDataRefresh);
router.get('/api/v1/public/jobOpening', publicController.publicJobOpening);
router.get('/api/v1/public/settingOption', publicController.publicSettingOption);
router.get('/api/v1/public/externalConnection', publicController.publicExternalConnection);


//
module.exports = router;
