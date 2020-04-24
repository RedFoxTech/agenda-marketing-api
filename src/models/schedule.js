const { Schema, model} = require('mongoose');

const ScheduleSchema = new Schema({
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
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    body:{
        type: String
    },
    attendees:[{
        type: Schema.Types.String,
        ref: 'User'
    }],
});

const Schedule = model('Schedule', ScheduleSchema);

module.exports = Schedule;