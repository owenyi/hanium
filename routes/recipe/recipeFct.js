//module dependencies
const db = require('../config/dbConnection');
const sql = require('./recipeSql');

exports.getRecipeList = async() => {
    let sqlStr = await sql.getRecipeList();
    return new Promise((resolve, reject) => {
        db.query(sqlStr, (error, rows) => {
            if(error) reject(0);
            else resolve(rows);
        });
    });
}

exports.getRecipe = async(idx) => {
    let sqlStr = await sql.getRecipe(idx);
    return new Promise((resolve, reject) => {
        db.query(sqlStr, (error, rows) => {
            if(error) reject(0);
            else resolve(rows);
        });
    });
}

exports.getRecipeIngredients = async(idx) => {
    let sqlStr = await sql.getRecipeIngredients(idx);
    return new Promise((resolve, reject) => {
        db.query(sqlStr, (error, rows) => {
            if(error) reject(0);
            else resolve(rows);
        });
    });
}

exports.getRecipeDescription = async(idx) => {
    let sqlStr = await sql.getRecipeDescription(idx);
    return new Promise((resolve, reject) => {
        db.query(sqlStr, (error, rows) => {
            if(error) reject(0);
            else resolve(rows);
        });
    });
}

exports.getIngredientsInRecipe = async(idx) => {
    let sqlStr = await sql.getIngredientsInRecipe(idx);
    return new Promise((resolve, reject) => {
        db.query(sqlStr, (error, rows) => {
            if(error) reject(0);
            else resolve(rows);
        });
    });
}

exports.getRecommendedRecipe = async(idx) => {
    let sqlStr = await sql.getRecommendedRecipe(idx);
    return new Promise((resolve, reject) => {
        db.query(sqlStr, (error, rows) => {
            if(error) reject(0);
            else resolve(rows);
        });
    });
}

//exports.postRecipe

exports.searchRecipe = async(keyword) => {
    let sqlStr = await sql.searchRecipe(keyword);
    return new Promise((resolve, reject) => {
        db.query(sqlStr, (error, rows) => {
            if(error) reject(0);
            else resolve(rows);
        });
    });
}

