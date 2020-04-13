const mongoose = require('../database');

const CategorySchema = new mongoose.Schema({
    id:{
        type: String,
        default: '0'
    },
    name: {
        type: String,
    },
    bgColor:{
        type:String,
        require: true,
        default: '1',
    },
    borderColor: {
        type: String,
        default: 'time',
    },
});

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;