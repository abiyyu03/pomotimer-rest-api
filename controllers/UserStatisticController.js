const express = require('express');
const {nanoid} = require('nanoid');
const mongoose = require('mongoose');
// const ObjectId = require('mongoose').ObjectId;
const {userStatisticSchema,userStatistic} = require('../models/userStatisticSchema');

const storeDataAtStart = async (req,res) => {
    const { startTime, stopTime, interval, minutesFocused, userId} = req.body;
    const id = nanoid(32);
    const createdAt = new Date().getTime();
    const updatedAt = new Date().getTime();
    // const startTime = new Date().getTime();
    const us = new userStatistic({
        _id : id,
        userId:mongoose.Types.ObjectId(parseInt(userId)),
        interval : interval,
        minutesFocused : minutesFocused,
        startTime:startTime,
        stopTime:stopTime,
        createdAt:createdAt,
        updatedAt:updatedAt,
    });
    await us.save();
    res.status(201).json({
        status:'success',
        message:"Data stored successfully",
    });
    // return {
    //     status:'success',
    //     StatusCode:201,
    //     message:"Data stored successfully",
    // };
    
}

const getAllUserStatisticData = async (req,res) => {
    await res.json(await userStatistic.find());
}

const deleteUserStatisticData = async (req,res) => {
    const {id} = req.params;
    await userStatistic.deleteOne({_id:id});
}

const getByIdUserStatisticData = async (req, res) => {
    const {id} = req.params;
    await res.json(await userStatistic.find({_id:id}));
}

const storeDataAtBreak = async () => {
    
}

const storeDataAtEnd = () => {
    
}


module.exports = {
    storeDataAtStart,
    storeDataAtBreak,
    storeDataAtEnd,
    getAllUserStatisticData,
    deleteUserStatisticData,
    getByIdUserStatisticData
};