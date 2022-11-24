const express = require('express');
const UserController=require('../controllers/UserController')
const router=express.Router();


router.post('/', function(req, res){UserController.registerUser})


module.exports = router