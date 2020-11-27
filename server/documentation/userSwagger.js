/**
* @swagger
* /api/v1/employee/profile/{employeeID}:
*   get:
*     tags:
*       - Employee
*     summary: Retrieve Employee Profile Information
*     description: Use this API to retrieve profile information associated to the user logged in
*     responses:
*       200:
*         description: Ok
*     parameters:
*       - in: path
*         name: employeeID
*         type: string
*         required: true
*         description: Unique identification of user logged in
* /api/v1/employee/performance/{employeeID}:
*   get:
*     tags:
*       - Employee
*     summary: Retrieve Employee Performance Information
*     description: Use this API to retreive performance information associated to the user logged in
*     responses:
*       200:
*         description: Ok
*     parameters:
*       - in: path
*         name: employeeID
*         type: string
*         required: true
*         description: Unique identification of user logged in
* /api/v1/employee/performance/{employeeID}/{id}:
*   get:
*     tags:
*       - Employee
*     summary: Retrieve Employee Performance Item Information
*     description: Use this API to retrieve performance item information associated to the user logged in
*     responses:
*       200:
*         description: Ok
*     parameters:
*       - in: path
*         name: employeeID
*         type: string
*         required: true
*         description: Unique identification of user logged in
*       - in: path
*         name: id
*         type: string
*         required: true
*         description: Unique identification of performance evaluation
* /api/v1/employee/par/{employeeID}:
*   get:
*     tags:
*       - Employee
*     summary: Retrieve Employee PAR Information
*     description: Use this API to retrieve PAR information associated to the user logged in
*     responses:
*       200:
*         description: Ok
*     parameters:
*       - in: path
*         name: employeeID
*         type: string
*         required: true
*         description: Unique identification of user logged in
* /api/v1/employee/par/{employeeID}/{id}:
*   get:
*     tags:
*       - Employee
*     summary: Retrieve Employee PAR Item Information
*     description: Use this API to retrieve PAR item information associated to the user logged in
*     responses:
*       200:
*         description: Ok
*     parameters:
*       - in: path
*         name: employeeID
*         type: string
*         required: true
*         description: Unique identification of user logged in
*       - in: path
*         name: id
*         type: string
*         required: true
*         description: Unique identification of PAR
* /api/v1/employeeID/transaction/{employeeID}:
*   get:
*     tags:
*       - Employee
*     summary: Retrieve Employee Transaction Information
*     description: Use this API to retrieve transaction information associated to the user logged in
*     responses:
*       200:
*         description: Ok
*     parameters:
*       - in: path
*         name: employeeID
*         type: string
*         required: true
*         description: Unique identification of user logged in
* /api/v1/employee/transaction/{employeeID}/{id}:
*   get:
*     tags:
*       - Employee
*     summary: Retrieve Employee Transaction Item Information
*     description: Use this API to retrieve transaction item information associated to the user logged in
*     responses:
*       200:
*         description: Ok
*     parameters:
*       - in: path
*         name: employeeID
*         type: string
*         required: true
*         description: Unique identification of user logged in
*       - in: path
*         name: id
*         type: string
*         required: true
*         description: ID of the transaction
* /api/v1/employee/approval/{employeeID}:
*   get:
*     tags:
*       - Employee
*     summary: Retrieve Employee Approval Workflow Information
*     description: Use this API to retrieve approval workflow information associated to the user logged in
*     responses:
*       200:
*         description: Ok
*     parameters:
*       - in: path
*         name: employeeID
*         type: string
*         required: true
*         description: Unique identification of user logged in
* /api/v1/employee/approval/{employeeID}/{id}:
*   get:
*     tags:
*       - Employee
*     summary: Retrieve Employee Approval Workflow Item Information
*     description: Use this API to retreive approval workflow item information associated to the user logged in
*     responses:
*       200:
*         description: Ok
*     parameters:
*       - in: path
*         name: employeeID
*         type: string
*         required: true
*         description: Unique identification of user logged in
*       - in: path
*         name: id
*         type: string
*         required: true
*         description: Unique identification of workflow
* /api/v1/employee/security/{employeeID}:
*   get:
*     tags:
*       - Employee
*     summary: Retrieve Employee Security Information
*     description: Use this API to retreive security information associated to the user logged in
*     responses:
*       200:
*         description: Ok
*     parameters:
*       - in: path
*         name: employeeID
*         type: string
*         required: true
*         description: Unique identification of user logged in
* /api/v1/employee/setting/{employeeID}:
*   get:
*     tags:
*       - Employee
*     summary: Retrieve Employee Setting Information
*     description: Use this API to retreive setting information associated to the user logged in
*     responses:
*       200:
*         description: Ok
*     parameters:
*       - in: path
*         name: employeeID
*         type: string
*         required: true
*         description: Unique identification of user logged in
* /api/v1/employee/setting/update:
*   post:
*     tags:
*       - Employee
*     summary: Update Employee Setting
*     description: Use this API to update setting associated to the user logged in
*     responses:
*       200:
*         description: Ok
*     consumes:
*       - application/json
*     parameters:
*       - in: body
*         description: The alert to remove
*         name: body
*         schema:
*           type: object
*           properties:
*             employeeID:
*               type: string
*               required: true
*             settingOptions:
*               type: array
*               items:
*                 type: object
*                 properties:
*                   settingOption:
*                     type: string
*                     required: true
*                   settingOptionValue:
*                     type: string
*                     required: true
* /api/v1/employee/rating/{employeeID}:
*   get:
*     tags:
*       - Employee
*     summary: Retrieve Employee Rating Information
*     description: Use this API to retreive rating information associated to the user logged in
*     responses:
*       200:
*         description: Ok
*     parameters:
*       - in: path
*         name: employeeID
*         type: string
*         required: true
*         description: Unique identification of user logged in
* /api/v1/employee/rating/submit:
*   post:
*     tags:
*       - Employee
*     summary: Submit Employee Rating
*     description: Use this API to submit rating associated to the user logged in
*     responses:
*       200:
*         description: Ok
*     consumes:
*       - application/json
*     parameters:
*       - in: body
*         description: The rating to submit
*         name: body
*         schema:
*           type: object
*           properties:
*             employeeID:
*               type: string
*               required: true
*             ratingOptionID:
*               type: string
*               required: true
*             score:
*               type: string
*               required: true
* /api/v1/employee/alert/{employeeID}:
*   get:
*     tags:
*       - Employee
*     summary: Retrieve Employee Alert Information
*     description: Use this API to retrieve alert information associated to the user logged in
*     responses:
*       200:
*         description: Ok
*     parameters:
*       - in: path
*         name: employeeID
*         type: string
*         required: true
*         description: Unique identification of user logged in
* /api/v1/employee/alert/remove:
*   post:
*     tags:
*       - Employee
*     summary: Remove Employee Alert
*     description: Use this API to remove an alert associated to the user logged in
*     responses:
*       200:
*         description: Ok
*     consumes:
*       - application/json
*     parameters:
*       - in: body
*         description: The alert to remove
*         name: body
*         schema:
*           type: object
*           properties:
*             employeeID:
*               type: string
*               required: true
*             employeeAlertID:
*               type: string
*               required: true
*/
