const {DataTypes, Sequelize} = require("sequelize");
const sequelize = new Sequelize(process.env.PG_URL);
// console.log("env:", sequelize);

sequelize
    .authenticate()

    .then(()=>{
        console.log("Connected Successfully");
    })
    .catch((err)=>{
        console.log("Unable to connect", err);
    });


const db = {};                                                  //This is the new part 
db.Sequelize= Sequelize;
db.sequelize=sequelize;
db.books = require("../models/book")(sequelize, DataTypes);     //importing books from models and exporting to routers


sequelize
    .sync({ force: false})
    .then(()=>{
        console.log("Database and tables created")
    })
    .catch((err)=>{
        console.log("error creating databse", err);
    });

// module.exports = sequelize;    we remove this and export object db 
module.exports = db;