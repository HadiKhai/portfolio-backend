const express = require("express");
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const directory = require('./routes/directory')

const app = express()
const port = 3000

app.use(cors());

// Routes ------------------------------------------
app.use('/directories', directory );

// Swagger config -------------------------------------
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "Portfolio API",
            description: "HadiKhai's Portfolio API Information",
            contact: {
                name: "HadiKhai"
            },
            servers: ["http://localhost:3000"]
        }
    },
    // ['.routes/*.js']
    apis: ["routes/*.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//Adding react build
app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Error 404 ------------------------------------------
app.use((req, res) => {
    res.status(404).send();
});

// App listen ------------------------------------------
app.listen(port, () => {
    console.log(`server running on port: ${port}`);
});
