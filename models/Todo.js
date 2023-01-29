
const {Schema, model} = require('mongoose');


const scheme = new Schema({
    name: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: false
    }
})

module.exports = model('Todo', scheme);