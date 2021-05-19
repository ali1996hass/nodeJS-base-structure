import "./models/_db";
import express from "express";
import cors from "cors";
import { indexRoute } from "./routs/index";
import { port, serverConfig } from "./config";
import { HttpStatusCode } from "./common/enums/httpStatuses.enum";
import { apiDocument } from "./swagger/APIsDocumentation";

const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');


let app = express();


// CORS config
const corsOptions: cors.CorsOptions = {
    origin: serverConfig.whiteList
};
app.use(cors());
app.use(cors(corsOptions));
app.set('trust proxy', 1);
// CORS config

// http REQUEST 
app.use(express.json({
    limit: "20mb"
}));
app.use(express.urlencoded({
    extended: true,
    limit: '20mb'
}));
app.use(bodyParser());
app.use(bodyParser.json());
// http REQUEST 


app.listen(port, () => {
    console.log(`server started at port ${port}`);
});

app.use('/api', indexRoute);

//API Documentation
var swaggerOptions = {
    explorer: false
};
app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(apiDocument.doc, false, swaggerOptions, ''));
//API Documentation

//Capture All 404 errors
app.use(function (req, res, next) {
    res.status(HttpStatusCode.NOT_FOUND).send('Unable to find the requested resource!');
});
//Capture All 404 errors
