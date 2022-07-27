//routers
const express = require('express');
const { ModuleFilenameHelpers } = require('webpack');
const controller = require('./controller');
const router = express.Router();
const app = express();

//createuser router to sign up - POST
app.post('/signup', controller.createNewUser, (req, res) => {
  return res.status(200);
});

module.exports = router;
