const express = require('express');
const {nanoid} = require('nanoid');
// const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const {taskSchema,task} = require('../models/taskSchema');

const getAllTaskData = async (req, res) => {
    await res.json(await task.find());
}

const addTaskData = async (req, res) => {
    const { interval, minutesFocused } = req.body;

    const id = 1;
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const savedTask = new task({
        _id:id,
        interval:interval,
        minutesFocused:minutesFocused,
        createdAt:createdAt,
        updatedAt:updatedAt,
    });
    await savedTask.save();
    res.status(201).json({
        status:'success',
        message:"Data stored successfully",
    });
};

const getByIdTaskData = async (req, res) => {
	const { id } = req.params;
	await res.json(await task.findById(id));
};

const deleteTaskData = async (req, res) => {
    const { id } = req.params;
	await task.deleteOne({_id:id});
};

module.exports = {
    getAllTaskData,
    addTaskData,
	getByIdTaskData,
};
