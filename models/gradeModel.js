module.exports = (sequelize, DataTypes) => {

    const Grade = sequelize.define("grade", {
        studentName: {
            type: DataTypes.STRING
        },
        password:{
            type: DataTypes.STRING
        },
    })

    return Grade

}// commit