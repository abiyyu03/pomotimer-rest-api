const mongoose = require('mongoose');
const { Schema } = mongoose;
// let now = new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds();

const collection = 'user_statistics';

const userStatisticSchema = new Schema({
    _id:{type:String, max:128},
    // user:{
    //     idUser:Number,
    //     name:String
    // },
    interval:Number,
    minutesFocused:Number,
    // startHours:{type:Number,default:new Date().getHours()},
    // startMinutes:{type:Number,default:new Date().getMinutes()},
    // startSeconds:{type:Number,default:new Date().getSeconds()},
    // endHours:{type:Number,default:new Date().getHours()},
    // endMinutes:{type:Number,default:new Date().getMinutes()},
    // endSeconds:{type:Number,default:new Date().getSeconds()},
});
const userStatistic = mongoose.model(collection,userStatisticSchema)

module.exports = {
    userStatisticSchema,
    userStatistic
};