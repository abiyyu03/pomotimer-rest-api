const mongoose = require('mongoose');
const { Schema } = mongoose;

const collection = 'users';

const userSchema = new Schema({
    _userId:{type:String, max:128},
    username:String,
    email:String,
    password:String,
    createdAt:Date,
    updatedAt:Date,
});
const user = mongoose.model(collection,userSchema);

module.exports = {
    userSchema,
    user
};