const db = require ("./db")

const A = db.sequelize.define('users',{
    user: {
        type: db.Sequelize.STRING
    },
    senha: {
        type:db.Sequelize.STRING
    }
})
// criar uma tabela pelo javascript pela função sync, forçar uma criação, se ja existir ela é apagada e criada outra
//A.sync({force: true})
module.exports = A