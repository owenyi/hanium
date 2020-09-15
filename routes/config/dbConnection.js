//db connection
const mysql = require('mysql');
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '1q2w3e4r!!',
    database : 'footdb',
    multipleStatements : true
  });
  db.connect(function(err) {
    if(err){
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id' + db.threadId)
  });

  module.exports = db;