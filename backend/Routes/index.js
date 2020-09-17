var express = require('express');
var multer = require("multer");
var router = express.Router();


// Controllers
var authCtrl = require('../controllers/authCtrl');


// Middlewares
var auth = require('../middlewares/auth');

//------------------------------------ Login/Register APIs ------------------------------------//

router.post('/login', authCtrl.login);
router.post('/register', authCtrl.register);

module.exports = router;