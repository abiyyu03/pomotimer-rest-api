const mongoose = require('mongoose');
const { Schema } = mongoose;

const collection = 'user_statistics';

const userStatisticSchema = new Schema({
    _id:{type:String, max:128},
    // user:{
    //     idUser:String,
    //     username:String
    // },
    userId:{type:Schema.Types.ObjectId, ref:'users'},
    interval:Number,
    minutesFocused:Number,
    startTime:String,
    stopTime:String,
    createdAt:Date,
    updatedAt:Date,
    // startMinutes:{type:Number,default:new Date().getMinutes()},
});
const userStatistic = mongoose.model(collection,userStatisticSchema);

module.exports = {
    userStatisticSchema,
    userStatistic
};