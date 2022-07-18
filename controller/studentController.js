const db = require('../models')

const Student = db.students
const Grade = db.grades

let students = [];
const addStudent = async (req, res) => {
    const student = {
      studentName: req.body.studentName,
      mobileNo: req.body.mobileNo,
      class_ID: req.body.class_ID,
      password:req.body.password,
    };
  
    const newStudent= await Student.create(student);
    students.push(newStudent);
    res.status(200).send(newStudent);
    console.log(student);
    let login = {
      studentName:req.body.studentName,
      password:req.body.password,
  }
  const stud = await Grade.create(login);
  console.log(stud);
  };


  const getAllStudents = async (req, res) => {

    let students = await Student.findAll({})
    res.status(200).send(students)

}

const getOneStudent = async (req, res) => {

    let id = req.params.id
    console.log(id);
    let student = await Student.findOne({ where: { id: id }})
    res.status(200).send(student)

}


  const updateStudent = async (req, res) => {

    let id = req.params.id
    console.log(id);
    const student = await Student.update(req.body, { where: { id: id }})

    res.status(200).send(student)
   

}

const deleteStudent = async (req, res) => {

    let id = req.params.id
    console.log(id);
    const student = await Student.destroy({ where: { id: id }} )

    res.status(200).send(student)

}


  module.exports= {
    addStudent,
    getAllStudents,
    updateStudent,
    deleteStudent,
    getOneStudent,
  }