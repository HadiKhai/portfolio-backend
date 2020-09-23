const express = require('express');
const router = express.Router();

//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory



/**
 * @swagger
 * /directories/{directory}:
 *   get:
 *     tags:
 *       - Directories
 *     description: Return all files and folders inside a directory
 *     produces:
 *       - application/json
 *
 *     parameters:
 *
 *       - name: directory
 *         description: Directory with %2F between them
 *         in: path
 *         required: true
 *         type: string
 *
 *     responses:
 *       200:
 *         description: Fetched directories
 */
router.get('/:directory',  async (req, res) => {
        const directoryContent = await getDirectoryContent(req);
        return res.send(directoryContent);

});

const getDirectoryContent =  (req) => {
        const directoryPath = path.join(__dirname,`../${req.params.directory}`)
        const content =  fs.readdirSync(directoryPath,   (error, files) => {
                if (error) {
                        return console.log('Unable to scan directory: ' + error);
                }
               return files
        });
        return {content}

}

module.exports = router;




