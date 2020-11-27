/**
* @swagger
* /api/v1/team/profile/{employeeID}:
*   get:
*     tags:
*       - Team
*     summary: Team Profile Information
*     description: Use this API to retrieve profile information for a team of employees that you have access to view
*     responses:
*       200:
*         description: Ok
*     parameters:
*       - in: path
*         name: employeeID
*         type: string
*         required: true
*         description: Unique identification of user logged in
* /api/v1/team/profile/{employeeID}/{teamEmployeeID}:
*   get:
*     tags:
*       - Team
*     summary: Team Employee Profile Information
*     description: Use this API to retrieve profile information for an employee that you have access to view
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
*         name: teamEmployeeID
*         type: string
*         required: true
*         description: Unique identification of employee you have access to view
* /api/v1/team/performance/{employeeID}:
*   get:
*     tags:
*       - Team
*     summary: Team Performance Information
*     description: Use this API to retrieve performance information for a team of employees that you have access to view
*     responses:
*       200:
*         description: Ok
*     parameters:
*       - in: path
*         name: employeeID
*         type: string
*         required: true
*         description: Unique identification of user logged in
* /api/v1/team/performance/{employeeID}/{teamEmployeeID}:
*   get:
*     tags:
*       - Team
*     summary: Team Employee Performance Information
*     description: Use this API to retrieve performance information for an employee that you have access to view
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
*         name: teamEmployeeID
*         type: string
*         required: true
*         description: Unique identification of employee you have access to view
* /api/v1/team/par/{employeeID}:
*   get:
*     tags:
*       - Team
*     summary: Team PAR Information
*     description: Use this API to retrieve PAR information for a team of employees that you have access to view
*     responses:
*       200:
*         description: Ok
*     parameters:
*       - in: path
*         name: employeeID
*         type: string
*         required: true
*         description: Unique identification of user logged in
* /api/v1/team/par/{employeeID}/{teamEmployeeID}:
*   get:
*     tags:
*       - Team
*     summary: Team Employee PAR information
*     description: Use this API to retrieve PAR information for an employee that you have access to view
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
*         name: teamEmployeeID
*         type: string
*         required: true
*         description: Unique identification of employee you have access to view
*/
