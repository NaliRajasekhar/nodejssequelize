module.exports = (sequelize, DataTypes) => {

    const Student = sequelize.define("student", {
        student_name: {
            type: DataTypes.STRING
        },
        mobile_no: {
            type: DataTypes.STRING
        },
        class_id: {
            type: DataTypes.INTEGER
        },
        description:{
            type:DataTypes.STRING
        },
        password:{
            type:DataTypes.STRING
        },
        
      
    })

    return Student

}