const express = require('express');
const {nanoid} = require('nanoid');
// const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const {todolistSchema,todolist} = require('../models/todolistSchema');

const getAllTodolistData = async (req, res) => {
    await res.json(await todolist.find());
}

const addTodolistData = async (req, res) => {
    const { title } = req.body;

    const id = nanoid(32);
    const isDone = false;
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const savedTodolist = new todolist({
        _id:id,
        title:title,
        isDone:isDone,
        // taskId:mongoose.Types.ObjectId(parseInt(taskId)),
        createdAt:createdAt,
        updatedAt:updatedAt,
    });
    await savedTodolist.save();
    res.status(201).json({
        status:'success',
        message:"Data stored successfully",
    });
}

const deleteTodolistData = async (req, res) => {
    const { id } = req.params;
    await todolist.deleteOne({_id:id});
    res.status(201).json({
        status:'success',
        message:"data deleted successfully",
    });
}

const getByIdTodolistData = async (req, res) => {
    const { id } = req.params;
    await res.json(await todolist.findById(id));
}

module.exports = {
    addTodolistData,
    getAllTodolistData,
    deleteTodolistData,
    getByIdTodolistData
}
