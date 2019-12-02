const express = require("express");
const Controller = require("../controller/model");

const Router = express.Router()

// Router.post("/marca/add",  Controller.addMarc);
Router.post("/add",  Controller.addModel);


module.exports = Router;
