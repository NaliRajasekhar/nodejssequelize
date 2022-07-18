const db = require('../models')



// create main Model
const Student = db.students
const Student_login = db.student_logins
const Grade = db.grades

// main work

// 1. create product

const addStudent = async (req, res) => {

    let info = {
        student_name: req.body.student_name,
        mobile_no: req.body.mobile_no,
        class_id:req.body.class_id,
        description: req.body.description,
        password:req.body.password,
        student_id:req.body.id
    }
    const student = await Student.create(info);
    //res.status(200).send(student);
    console.log(student);
    let login = {
        student_name:req.body.student_name,
        password:req.body.password,
    }
    const student_login = await Student_login.create(login);
    console.log(student_login);
    res.status(200).send(student_login);
}



// 2. get all products

const getAllStudents = async (req, res) => {

    let students = await Student.findAll({})
    res.status(200).send(students)

}

// 3. get single student

const getOneStudent = async (req, res) => {

    let id = req.params.id
    let student = await Student.findOne({ where: { id: id }})
    res.status(200).send(student)

}

// 4. update Student

const updateStudent = async (req, res) => {

    let id = req.params.id

    const student = await Student.update(req.body, { where: { id: id }})

    res.status(200).send(student)
   

}

// 5. delete student by id

const deleteStudent = async (req, res) => {

    let id = req.params.id
    
    await Student.destroy({ where: { id: id }} )

    res.status(200).send('student is deleted !')

}

// 7. connect one to many relation Product and Reviews

const getStudentGrades =  async (req, res) => {

    const id = req.params.id

    const data = await Student.findOne({
        include: [{
            model: Grade,
            as: 'grade'
        }],
        where: { id: id }
    })

    res.status(200).send(data)

}

module.exports = {
    addStudent,
    getAllStudents,
    getOneStudent,
    updateStudent,
    deleteStudent,
    getStudentGrades,
    
}