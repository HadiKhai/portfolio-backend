const express = require('express');
const router = express.Router();

//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory


//
// /**
//  * @swagger
//  * /questions:
//  *   get:
//  *     tags:
//  *       - Questions
//  *     description: Returns set of questions not related to specific themes
//  *     produces:
//  *       - application/json
//  *     responses:
//  *       200:
//  *         description: Fetched questions
//  */

router.get('/:directories',  (req, res) => {
    try {
        const directoryPath = path.join(__dirname, '../root');
        //passsing directoryPath and callback function
        fs.readdir(directoryPath,  (err, files) => {
            //handling error
            if (err) {
                return console.log('Unable to scan directory: ' + err);
            }
            //listing all files using forEach
            files.forEach(function (file) {
                // Do whatever you want to do with the file
                console.log(file);
            });
        });
        console.log(req.params)
        return res.send("hello")
    } catch (err) {
        throwError(res, err)
    }

});

module.exports = router;




