const express = require('express');
const {nanoid} = require('nanoid');
// const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const {userSchema,user} = require('../models/userSchema');

const registration = async (req,res) => {
    const { username, email, password} = req.body;
    const id = 123;
    const createdAt = new Date().getTime();
    const updatedAt = new Date().getTime();
    
    const savedUser = new user({
        _userId:id,
        username:username,
        email:email,
        password:password,
        createdAt:createdAt,
        updatedAt:updatedAt,
    });
    await savedUser.save();
    res.status(201).json({
        status:'success',
        message:"Data stored successfully",
    });
}

const getAllUserData = async (req, res) => {
    await res.json(await user.find());
}

const login = () => {
    
}

module.exports = {
    login,
    registration,
    getAllUserData
};
