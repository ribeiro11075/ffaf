const express = require('express');
const teamController = require('../controller/teamController');
const router = express.Router();

// Define routes with parameters
router.get('/api/v1/team/profile/:employeeID', teamController.teamProfile);
router.get('/api/v1/team/profile/:employeeID/:teamEmployeeID', teamController.teamProfileEmployee);
router.get('/api/v1/team/performance/:employeeID', teamController.teamPerformance);
router.get('/api/v1/team/performance/:employeeID/:teamEmployeeID', teamController.teamPerformanceEmployee);
router.get('/api/v1/team/par/:employeeID', teamController.teamPar);
router.get('/api/v1/team/par/:employeeID/:teamEmployeeID', teamController.teamParEmployee);

//
module.exports = router;
