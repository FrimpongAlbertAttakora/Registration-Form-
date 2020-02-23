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
    const savedStudent = await student.save();
    res.redirect('/submit.html')
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


//UPDATE A STUDENT
router.patch('/:studentId', async (req, res) => {
    try{
    const updatedStudent = await Student.updateOne({ _id: req.params.studentId }, 
        {
            $set: { name: req.body.name }
        });
        res.json(updatedStudent);
            }catch (err) {
                res.json({ message: err });
    }
});


//DELETE A STUDENT
router.delete('/:studentId', async (req, res) => {
    try{
        const removedStudent = await Student.remove({ _id: req.params.studentId });
        res.json(removedStudent);
    }catch (err) {
        res.json({ message: err });
    }
});


 module.exports = router;