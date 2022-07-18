//import controllers students, grades(classes)
const studentController = require('../controllers/studentcontroller.js')
const gradeController = require('../controllers/gradecontroller.js')



//router
const router = require('express').Router()


//use routers
router.post('/addStudent', studentController.addStudent)

router.get('/allStudents', studentController.getAllStudents)

//router.get('/published', studentController.getPublishedProduct)



//Grade Url and Controller

router.get('/allGrades', gradeController.getAllGrades)
router.post('/addGrade/:id', gradeController.addGrade)

//get student Grades
router.get('/getStudentGrades/:id', studentController.getStudentGrades)




//Products router
router.get('/:id', studentController.getOneStudent)

router.put('/:id', studentController.updateStudent)

router.delete('/:id', studentController.deleteStudent)


module.exports = router
