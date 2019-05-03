var Sequelize = require('sequelize');
 
var sequelize = new Sequelize('ecomdb', 'shru', 'shravaniK100!', {
    host: 'localhost',
    port:3004,
    dialect:'mysql',
    pool : {
        min :0,
        max:5
    }
})

var User = sequelize.define('users', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey :true
    },
    name: {
        type:sequelize.STRING,
        allowNull: false,


    }
})

var Product = sequelize.define('products', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey :true
    },

    name: {
        name: sequelize.STRING,
        allowNull: false
    },
    manufacturer: sequelize.STRING,
    price : {
        type: sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
})

sequelize.sync()
    .then(()=> console.log("database has been synced"))
    .catch((err) => console.log("error creating database"))

exports = module.exports = {
    User, Product
}