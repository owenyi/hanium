const express = require('express');
const bodyparser = require('body-parser');

//db connection
const mysql = require('mysql');
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '1q2w3e4r!!',
    database : 'footdb'
  });
  db.connect(function(err) {
    if(err){
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id' + db.threadId)
  });

const app = express();

//ingredient tab
app.get('/api/ingredients/', function (req, res) {
    let json = new Object();
    json.res_state = "success";
    let idx = req.query.idx;
    if(idx===undefined){
        db.query(`SELECT idx, name, image FROM tb_ingredients;`,
        function(error, result){
            if(error){
                throw error;
              }
            json.res_data = result;
            res.send(json);
        });
    } else {
        db.query(`SELECT * FROM tb_ingredients WHERE idx=${idx}`,
        function(error, result){
            if(error){
                throw error;
              }
            const ingredient = result[0];
            if(ingredient){
                json.res_data = ingredient;
                res.send(json);
                //res.json(ingredient);
            } else {
                res.status(404).json({errorMessage:"The ingredient was not found"});
            }
        });
    }

});

//listen
app.listen(3000, function() {
  console.log("The server is runnung");
});