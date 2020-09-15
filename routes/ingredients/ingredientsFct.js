//module dependencies
const db = require('../config/dbConnection');
const sql = require('./ingredientsSql');

exports.getIngredients = async(idx) => {
    let sqlStr = await sql.getIngredients(idx);
    return new Promise((resolve, reject) => {
        db.query(sqlStr, (error, rows) => {
            if(error) reject(0);
            else resolve(rows);
        });
    });
}