const dbConfig = require('../config/dbConfig.js');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,
        
    }
)

sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error'+ err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.students = require('./studentModel.js')(sequelize, DataTypes)
db.grades = require('./gradeModel.js')(sequelize, DataTypes)

db.students.hasOne(db.grades, {
    foreignKey: 'student_id',
    as: 'grade'
})
db.grades.hasMany(db.students, {
    foreignKey: 'student_id',
    as:'student'
})

module.exports = db