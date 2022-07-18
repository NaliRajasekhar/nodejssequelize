module.exports = (sequelize, DataTypes) => {

    const Student = sequelize.define("student", {
        studentName: {
            type: DataTypes.STRING
        },
        mobileNo: {
            type: DataTypes.STRING
        },
        class_Id: {
            type: DataTypes.STRING
        },
        password:{
            type:DataTypes.STRING
        },
        
      
    })

    return Student

}