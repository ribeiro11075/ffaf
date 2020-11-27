const express = require('express');
const employeeController = require('../controller/employeeController');
const router = express.Router();

// Define routes with parameters
router.get('/api/v1/employee/profile/:employeeID', employeeController.employeeProfile);
router.get('/api/v1/employee/performance/:employeeID', employeeController.employeePerformance);
router.get('/api/v1/employee/performance/:employeeID/:id', employeeController.employeePerformanceItem);
router.get('/api/v1/employee/par/:employeeID', employeeController.employeePar);
router.get('/api/v1/employee/par/:employeeID/:id', employeeController.employeeParItem);
router.get('/api/v1/employee/transaction/:employeeID', employeeController.employeeTransaction);
router.get('/api/v1/employee/transaction/:employeeID/:id', employeeController.employeeTransactionItem);
router.get('/api/v1/employee/approval/:employeeID', employeeController.employeeApproval)
router.get('/api/v1/employee/approval/:employeeID/:id', employeeController.employeeApprovalItem);
router.get('/api/v1/employee/security/:employeeID', employeeController.employeeSecurity);
router.get('/api/v1/employee/setting/:employeeID', employeeController.employeeSetting);
router.post('/api/v1/employee/setting/update', employeeController.employeeUpdateSetting);
router.get('/api/v1/employee/rating', employeeController.employeeRating);
router.post('/api/v1/employee/rating/submit', employeeController.employeeSubmitRating);
router.get('/api/v1/employee/alert/:employeeID', employeeController.employeeAlert);
router.post('/api/v1/employee/alert/remove', employeeController.employeeRemoveAlert);

//
module.exports = router;
