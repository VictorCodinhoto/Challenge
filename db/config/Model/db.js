const Sequelize = require("sequelize")

const sequelize = new Sequelize('BancoDoApp', 'root', 'root123',{
    host: 'localhost',
    dialect: 'mysql',
})
module.exports ={
    Sequelize: Sequelize,
    sequelize: sequilize
}