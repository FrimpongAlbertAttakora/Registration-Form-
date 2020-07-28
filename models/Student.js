const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    program: {
        type: String,
        require: true
    },
    telNumber: {
        type: Number,
        require: true
    },
    gaudianName: {
        type: String,
        require: true
    },
    gaudianPhoneNumber: {
        type: Number,
        require: true
    },
    year: {
        type: String,
        require: true
    },
    houseNumber: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('JecadoStudents', StudentSchema);