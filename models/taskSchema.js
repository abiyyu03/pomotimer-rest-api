const mongoose = require('mongoose');
const { Schema } = mongoose;

const collection = 'tasks';

const taskSchema = new Schema({
    _id:{type:String, max:128},
    interval:Number,
    minutesFocused:Number,
    createdAt:Date,
    updatedAt:Date,
});
const task = mongoose.model(collection,taskSchema);

module.exports = {
    taskSchema,
    task
};