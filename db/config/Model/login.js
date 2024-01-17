const db = require ("./db")

const login = db.sequelize.define('user',{
    user: {
        type: db.Sequelize.STRING
    },
    password: {
        type:db.Sequelize.STRING
    }
})
// criar uma tabela pelo javascript pela função sync, forçar uma criação, se ja existir ela é apagada e criada outra
//A.sync({force: true})
module.exports = login