const db = require ("./db")

const A = db.sequelize.define('nomeTabela',{
    user: {
        type: db.Sequelize.STRING
    },
    senha: {
        type:db.Sequelize.STRING
    }
})