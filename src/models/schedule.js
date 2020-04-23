const mongoose = require('../database');

const ScheduleSchema = new mongoose.Schema({
    id:{
        type: String,
        default: '0'
    },
    title: {
        type: String,
    },
    calendarId:{
        type:String,
        require: true,
        default: '1',
    },
    category: {
        type: String,
        default: 'time',
    },
    start: {
        type: Date,
    },
    end: {
        type: Date,
    },
    location: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    body:{
        type: String
    },
    attendees:[{
        type: mongoose.Schema.Types.String,
        ref: 'User'
    }],
});

const Schedule = mongoose.model('Schedule', ScheduleSchema);

module.exports = Schedule;