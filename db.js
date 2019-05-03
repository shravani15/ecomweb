const Sequelize = require('sequelize');
 
const db = new Sequelize('ecomdb', 'shru', 'shravaniK100!', {
    host: 'localhost',
   
    dialect:'mysql',
    pool : {
        min :0,
        max:5
    }
})



const User = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey :true,
        allowNull: false,
    
        
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,


    }
})

const Product = db.define('products', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey :true
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    manufacturer: Sequelize.STRING,
    price : {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
})

db.sync()
    .then(()=> console.log("database has been synced"))
    .catch((err) => console.log("error creating database"))

module.exports = {
    User, Product
}
