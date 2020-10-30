exports.getRecipeList = async() => {
    let sql = `
    SELECT idx, title, titleImage FROM tb_recipe
    `
    return sql;
}

exports.getRecipe = async(idx) => {
    let sql = `
    SELECT * FROM tb_recipe WHERE idx=${idx}
    `;
    return sql;
}

exports.getRecipeIngredients = async(idx) => {
    let sql = `
    SELECT ingredients_idx, name, quantity, ingredientCategory
    FROM tb_recipeingredients WHERE recipe_idx=${idx}
    `;
    return sql;
}

exports.getRecipeDescription = async(idx) => {
    let sql = `
    SELECT descriptionNbr, description, image
    FROM tb_recipedescriptions WHERE recipe_idx=${idx}
    ORDER BY descriptionNbr
    `;
    return sql;
}

exports.getIngredientsInRecipe = async(idx) => {
    let sql = `
    SELECT * FROM tb_ingredients WHERE idx=${idx}
    `;
    return sql;
}

exports.getRecommendedRecipe = async(idx) => {
    let sql = `
    SELECT DISTINCT recipe_idx, title, titleImage,
	CASE
		WHEN recipe_idx
		IN (SELECT recipe_idx FROM tb_recipeingredients
			LEFT JOIN tb_refrigerator
			ON tb_recipeingredients.ingredients_idx=tb_refrigerator.ingredients_idx
			WHERE user_idx=${idx} AND expiration<4)
		THEN 1
		ELSE 2
		END AS priority
	FROM tb_recipe
	LEFT JOIN tb_recipeingredients
		ON idx=recipe_idx
	LEFT JOIN tb_refrigerator
		ON tb_recipeingredients.ingredients_idx=tb_refrigerator.ingredients_idx
	ORDER BY priority, recipe_idx
    `;
    return sql;
}

/* exports.postRecipe = async(title, summary, cookingTime, servings, difficulty, user_idx,) => {
    let sql = `
    INSERT INTO tb_recipe (title, summary, cookingTime, servings, difficulty, user_idx, regDatetime, editDatetime)
    VALUES (${title}, ${summary}, ${cookingTime}, ${servings}, ${difficulty}, ${user_idx}, NOW(), NOW())
    `;
    return sql;
}

exports.postRecipeIngredientsA = async() => {
    let sql = `
    INSERT INTO tb_recipeIngredient (recipe_idx, name, quantity, ingredientCategory)
    VALUES (${recipe_idx}, ${name}, ${quantity}, ingredientCategory)
    `;
    return sql;
}

exports.postRecipeIngredientsB = async() => {
    let sql = `
    INSERT INTO tb_recipeIngredient (recipe_idx, name, quantity, ingredientCategory)
    VALUES ()
    `;
    return sql;
}

exports.postRecipeDescription = async() => {
    let sql = `
    INSERT INTO tb_recipedescription (recipe_idx, descriptionNbr, description)
    VALUES ()
    `;
    return sql;
} */

exports.searchRecipe = async(keyword) => {
    sql = `
    SELECT distinct idx, title FROM tb_recipe
    LEFT JOIN tb_recipeingredients
    ON idx=recipe_idx
    WHERE title LIKE '%${keyword}%'
    OR NAME LIKE '%${keyword}%'
    `;
    return sql;
}