/**
* @swagger
* /api/v1/admin/integration/log/{apiKey}:
*   get:
*     tags:
*       - Admin
*     summary: Integration Logs
*     description: Use this API to retrieve integration log information
*     responses:
*       200:
*         description: Ok
*     parameters:
*       - in: path
*         name: apiKey
*         type: string
*         required: true
*         description: Unique identification
* /api/v1/admin/integration/setting/{apiKey}:
*   get:
*     tags:
*       - Admin
*     summary: Integration Settings
*     description: Use this API to retrieve integration settings information
*     responses:
*       200:
*         description: Ok
*     parameters:
*       - in: path
*         name: apiKey
*         type: string
*         required: true
*         description: Unique identification
*/
