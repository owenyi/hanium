exports.getIngredients = async(idx) => {
    let sql = ``;
    if(idx === undefined) {
        sql =
        `
        SELECT idx, name FROM tb_ingredients
        `    
    } else {
        sql =
        `
        SELECT * FROM tb_ingredients WHERE idx=${idx}
        `;
    }
    return sql;
};