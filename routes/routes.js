const express = require('express');
const router = express.Router();

// const {userStatisticSchema,userStatistic} = require('../models/userStatisticSchema');
// const {userSchema,user} = require('../models/userSchema');

const {storeDataAtStart,storeDataAtEnd,getAllUserStatisticData,deleteUserStatisticData,getByIdUserStatisticData} = require('../controllers/UserStatisticController');
const {login,registration,getAllUserData} = require('../controllers/UserController');
const {addTodolistData, getAllTodolistData, deleteTodolistData, getByIdTodolistData} = require('../controllers/TodolistController');
const {getAllTaskData, addTaskData, getByIdTaskData} = require('../controllers/TaskController');

//route area
router.get('/tasks', async (req,res) => {
    await getAllTaskData(req,res);
});

router.post('/tasks', async (req,res) => {
    await addTaskData(req,res);
});

router.get('/tasks/:id', async (req,res) => {
	await getByIdTaskData(req, res);
});

router.get('/todolists', async (req,res) => {
    await getAllTodolistData(req,res);
});

router.post('/todolists', async (req,res) => {
    await addTodolistData(req,res);
});

router.delete('/todolists/:id', async (req,res) => {
    await deleteTodolistData(req,res);
});

router.get('/todolists/:id', async (req,res) => {
    await getByIdTodolistData(req,res);
});

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
    await getByIdUserStatisticData(req, res);
});

router.get('/about/:id',(req,res) => {
    res.send(req.params);
});

module.exports = router;
