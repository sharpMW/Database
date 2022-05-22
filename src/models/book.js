// const sequelize = require("../db/index");
// const {DataTypes} = require("sequelize");  we remove these statements and put it in index.js of db...just DRY coding

// const Book = sequelize.define("book", {
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false
//     }
// },
// {
//     timestamp: true,
//     createdAt: "created-at",
//     updatedAt: "updated-at"
// });

// Book.sync({force: false})
//     .then(()=>{
//         console.log("Book & table Created")
//     });

// module.exports = Book;    


// we can also do like this
module.exports = (sequelize, DataTypes)=>{
    const Book = sequelize.define(
        "book",
        { 
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            category: {
                type: DataTypes.STRING,
                allowNull:true
            },
            isSeconHand: {
                type:DataTypes.BOOLEAN,
                allowNull:true,
            },
            isbn: {
                type:DataTypes.STRING,
                allowNull:false,
                unique:true
            },
        },{
            timestamp: true,
            createdAt: "created-at",
            updatedAt: "updated-at"
        }
    );
    return Book;
};