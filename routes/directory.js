const express = require('express');
const router = express.Router();

const mime = require('mime');
const path = require('path');

const fs = require('fs');
const responseType = require('../types/responseType');

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
 *       404:
 *         description: Directory Not Found
 */
router.get('/:directory',  async (req, res) => {
    try{
        const directoryContent = await getDirectoryContent(req);
        res.json(directoryContent).status(responseType.Ok)
    }catch(err){
        res.status(responseType.NOT_FOUND).send();
        console.log(err)
    }
});

/**
 * @swagger
 * /directories/{directory}/read:
 *   get:
 *     tags:
 *       - Directories
 *     description: Return the content of the file
 *     produces:
 *       - application/json
 *
 *     parameters:
 *
 *       - name: directory
 *         description: Directory with %2F between them
 *         in: path        const filePath = path.join(__dirname,`../${req.params.directory}`)

 *         required: true
 *         type: string
 *
 *     responses:
 *       200:
 *         description: Read File
 *       404:
 *         description: file Not Found
 */
router.get('/:directory/read',  async (req, res) => {
    try{
        const textContent = await readTextContent(req);
        res.json(textContent).status(responseType.Ok)
    }catch(err){
        res.status(responseType.NOT_FOUND).send();
        console.log(err)
    }
});

/**
 * @swagger
 * /directories/{directory}/download:
 *   get:
 *     tags:
 *       - Directories
 *     description: Download file
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
 *         description: Download File
 *       404:
 *         description: PDF Not Found
 */
router.get('/:directory/download',  async (req, res) => {
    try{
        const filePath = path.join(__dirname,`../${req.params.directory}`)

        const filename = path.basename(filePath);
        const mimetype = mime.getType(filePath);

        res.setHeader('Content-disposition', 'attachment; filename=' + filename);
        res.setHeader('Content-type', mimetype);

        const filestream = fs.createReadStream(filePath);

        filestream.pipe(res);
        console.log(filestream)

    }catch(err){
        res.status(responseType.NOT_FOUND).send();
        console.log(err)
    }
});

const getDirectoryContent =  (req) => {
    const directoryPath = path.join(__dirname,`../${req.params.directory}`)
    const content =  fs.readdirSync(directoryPath,   (error, files) => {
        if (error) {
            return console.log('Unable to scan directory: ' + error);
        }
        return files
    });
    return content
}

const readTextContent =  (req) => {
    const textPath = path.join(__dirname,`../${req.params.directory}`)
    const content =  fs.readFileSync(textPath,"utf8", (error, files) => {

        if (error) {
            return console.log('Unable to read file: ' + error);
        }
        console.log(files)
        return files
    });
    return content.split('\n')
}


module.exports = router;




