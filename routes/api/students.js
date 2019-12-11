const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const students = require('../../Students');


// Gets all Members 
router.get('/', (req, res) => res.json(students));


// Create Student Registration Form
router.post('/', (req, res) => {
    // res.send(req.body);
    const newStudent = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        program: req.body.program,
        telNumber: req.body.telNumber,
        gaudianName: req.body.gaudianName,
        gaudianPhoneNumber: req.body.gaudianPhoneNumber,
        year: req.body.year,
        houseNumber: req.body.houseNumber,
        status: 'active',
    };
 
    if(!newStudent.name || !newStudent.email) {
       return res.status(400).json({ msg: 'Please include a name and email' });
    }
 
    students.push(newStudent);
    res.json(students);
    //res.redirect('/');
 });


 module.exports = router;

