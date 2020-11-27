const express = require('express');
const adminController = require('../controller/adminController');
const router = express.Router();

// Define routes with parameters
router.get('/api/v1/admin/integration/log/:apiKey', adminController.adminIntegrationLog);
router.get('/api/v1/admin/integration/setting/:apiKey', adminController.adminIntegrationSetting);

//
module.exports = router;
