const express = require('express');
const router = express.Router();
const {userStatisticSchema,userStatistic} = require('../models/userStatisticSchema');
const {storeDataAtStart,storeDataAtEnd,getAllUserStatisticData,deleteUserStatisticData} = require('../controllers/UserStatisticController');

//route area
  
router.get('/',async (req,res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
    // res.json(await userStatistic.find());
});

router.post('/', async (req,res) => {
    await storeDataAtStart(req,res);
    res.json({
        status:'success',
        StatusCode:201,
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