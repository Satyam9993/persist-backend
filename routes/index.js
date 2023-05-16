const express = require('express');
const router = express.Router();

const { 
    Login,
    SignIn,
    Duplicate,
    Edit,
    getdata
} = require('../controller/Auth');
const fetchusers = require('../middleware/fetchuser');

router.post('/login', Login)
router.post('/signin', SignIn)
router.post('/duplicate', fetchusers, Duplicate)
router.post('/edit',fetchusers, Edit)
router.get('/getdata', getdata)

module.exports = router;