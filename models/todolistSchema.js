const mongoose = require('mongoose');
const { Schema } = mongoose;

const collection = 'todolists';

const todolistSchema = new Schema({
    _id:{type:String, max:128},
    title:String,
    isDone:Boolean,
    taskId:{type:Schema.Types.ObjectId, ref:'tasks'},
    createdAt:Date,
    updatedAt:Date,
});
const todolist = mongoose.model(collection,todolistSchema);

module.exports = {
    todolistSchema,
    todolist
};