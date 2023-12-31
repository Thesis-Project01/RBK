const { DataTypes } = require("sequelize");
const sequelize = require("../configdb"); 
const {comments}=require("./blogsModel")

const User = sequelize.define("Users",{
username:{
    type:DataTypes.STRING,
    unique:true,
    allowNull:false
},
email:{
    type:DataTypes.STRING,
    unique:true,
    allowNull:false
},
firstName:{
    type:DataTypes.STRING,
    allowNull:false
},
lastName:{
    type:DataTypes.STRING,
    allowNull:false
},
});
User.hasMany(comments, {
    foreignKey: "userId", 
    onDelete: "CASCADE", 
  });
  comments.belongsTo(User, {
    foreignKey: "userId",
  });

module.exports = {User,comments};