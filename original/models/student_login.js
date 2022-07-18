module.exports = (sequelize, DataTypes) => {

    const Student_login = sequelize.define("student_login", {
        student_name: {
            type: DataTypes.STRING
        },
        password:{
            type:DataTypes.STRING
        }
      
    })

    return Student_login

}