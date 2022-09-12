const express = require('express');
const router = express.Router();
const {userStatisticSchema,userStatistic} = require('../models/userStatisticSchema');
const {userSchema,user} = require('../models/userSchema');
const {storeDataAtStart,storeDataAtEnd,getAllUserStatisticData,deleteUserStatisticData} = require('../controllers/UserStatisticController');
const {login,registration,getAllUserData} = require('../controllers/UserController');

//route area
  
router.post('/register', async (req,res) => {
    await registration(req,res);
});

router.get('/user', async (req,res) => {
    await getAllUserData(req, res);
});

router.get('/',async (req,res) => {
    // res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
    await getAllUserStatisticData(req,res);
});

router.post('/', async (req,res) => {
    await storeDataAtStart(req,res);
    res.status(201).json({
        status:'success',
        message:"Data stored successfully",
    });
});


router.delete('/:id', async (req,res) => {
    await deleteUserStatisticData(req,res);
    res.json({
        status:'success',
        statusCode:200,
        message:"data successfully deleted"
    });
});

router.get('/:id',async (req,res) => {
    const {id} = req.params;
    res.json(await userStatistic.find({_id:id}));
});

router.get('/about/:id',(req,res) => {
    res.send(req.params);
});

module.exports = router;