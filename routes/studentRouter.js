const studentController = require('../controller/studentController.js')

const router = require('express').Router()

router.post('/create', studentController.addStudent)

router.get('/allStudents', studentController.getAllStudents)

router.get('/:id', studentController.getOneStudent)

router.put('/:id', studentController.updateStudent)

router.delete('/:id', studentController.deleteStudent)

module.exports= router