const express = require("express");
// const swaggerUi = require('swagger-ui-express');
// const swaggerJSDoc = require('swagger-jsdoc');

const directory = require('./routes/directory')

const app = express()
const port = 3000



// Routes ------------------------------------------
app.use('/directories', directory );

// Swagger config -------------------------------------
// const swaggerOptions = {
//     swaggerDefinition: {
//         info: {
//             version: "4.1.4",
//             title: "Portfolio API",
//             description: "My Portfolio's API Information",
//             contact: {
//                 name: "HadiKhai"
//             },
//             servers: ["http://localhost:3000"]
//         }
//     },
//     // ['.routes/*.js']
//     apis: ["./routes/*.js"]
// };
//
// const swaggerDocs = swaggerJSDoc(swaggerOptions);
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


// Error 404 ------------------------------------------
app.use((req, res) => {
    res.status(404).send();
});

// App listen ------------------------------------------
app.listen(port, () => {
    console.log(`server running on port: ${port}`);
});
