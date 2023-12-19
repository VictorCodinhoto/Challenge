const express = require("express");
const managerController = require("./controllers/managerController");
const bodyParser = require('bodyparser');
const app = express();

app.use(express.json());
app.get('/managers', managerController.getAll)
app.post('/managers', managerController.createManager)

module.exports = app;

