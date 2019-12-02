const express = require("express");
const Controller = require("../controller/category");

const Router = express.Router()

Router.post("/add",  Controller.addCategory);


module.exports = Router;