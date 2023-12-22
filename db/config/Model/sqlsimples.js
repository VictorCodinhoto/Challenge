const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
  });

connection.connect(function(err){
    if (err){
        console.log("Houve um erro em conectar com o banco de dados");
    }
    else{
        console.log("Conexão realizada com sucesso");
    }
            
});

connection.query("Select id, email,senha FROM contas", function(err,rows,fields){
    if(err){
        console.log("Houve um erro"+ err);
    }
    else{
        console.log("Query realizada com sucesso!, Resultado:" + rows);
    }
});

  connection.query(
    'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );
  
  // with placeholder
  connection.query(
    'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
    ['Page', 45],
    function(err, results) {
      console.log(results);
    }
);


connection.execute(
    'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
    ['Rick C-137', 53],
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
)


