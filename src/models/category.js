const {Schema, model} = require('mongoose');


const CategorySchema = new Schema({
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

const Category = model('Category', CategorySchema);

module.exports = Category;