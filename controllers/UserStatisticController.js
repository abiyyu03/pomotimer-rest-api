const express = require('express');
const {nanoid} = require('nanoid');
const mongoose = require('mongoose');
const {userStatisticSchema,userStatistic} = require('../models/userStatisticSchema');

const storeDataAtStart = async (req,res) => {
    const {interval,minutesFocused} = req.body;
    const id = nanoid(32);
    const startTime = new Date().getTime();
    const us = new userStatistic({
        _id : id,
        interval : interval,
        minutesFocused : minutesFocused,
    });
    await us.save();
    return {
        status:'success',
        StatusCode:201,
        message:"Data stored successfully",
    };
    
}

const getAllUserStatisticData = async () => {
    await userStatistic.find();
}

const deleteUserStatisticData = async (req,res) => {
    const {id} = req.params;
    await userStatistic.deleteOne({_id:id});
}

const getByIdUserStatisticData = async (req, res) => {
    const {id} = req.params;
    await userStatistic.find({_id:id});
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
    deleteUserStatisticData
};