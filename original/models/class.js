module.exports = (sequelize, DataTypes) => {

    const Grade = sequelize.define("grade", {
        class_id: {
            type: DataTypes.INTEGER
        },
        class_name:{
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.TEXT
        }
    })

    return Grade

}