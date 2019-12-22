const express = require('express');
const router = express.Router();

const Student = require('../models/Student');

// Gets all Members 
//GET BACK ALL THE POSTS
router.get('/', async (req, res) => {
    try{
        const students = await Student.find();
            res.json(students);
    }   catch(err){
            res.json({message: err});
    }
});


//ADD A STUDENT
router.post('/', async (req, res) => {
    const student = new Student({
        name: req.body.name,
        email: req.body.email,
        program: req.body.program,
    });
    try{
    const savedStudent = await student.save()
    res.json(savedStudent);
    }catch(err){
        res.json({message: err});
    }
});


//SPECIFIC STUDENT
router.get('/:studentId', async (req, res) => {
    try{
        const student = await Student.findById(req.params.studentId);
        res.json(student);
    }catch (err) {
        res.json({ message: err });
    }
});




 module.exports = router;

