const express = require('express');
const router = express.Router();

//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory



/**
 * @swagger
 * /questions:
 *   get:
 *     tags:
 *       - Questions
 *     description: Returns set of questions not related to specific themes
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Fetched questions
 */

router.get('/:directories',  async (req, res) => {
        const directoryPath = path.join(__dirname,`../${req.params.directories}` )
        //passsing directoryPath and callback function
        const directoryContent = await

        console.log(directoryContent)
        // return res.send(directoryContent);

});

module.exports = router;




