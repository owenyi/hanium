//module dependencies
const query = require('./ingredientsFct');

exports.getIngredients = async(req, res, next) => {
    try{
        let returnJson = new Object();

        let idx = req.query.idx;

        returnJson.res_State = "";
        returnJson.res_Msg = "";
        returnJson.res_Data = "";
    
        await query.getIngredients(idx)
            .then((result) => {
            returnJson.res_State = "success_get_ingredients";
            returnJson.res_Msg = "식재료를 성공적으로 가져왔습니다.";
            returnJson.res_Data = result;
            res.send(returnJson);
        })
            .catch((e) => {
            returnJson.res_State = "sql_error";
            returnJson.res_Msg = "잠시 후에 시도해주세요.";
            res.send(returnJson);
        });    
    } catch(e) {
        console.error(e);
        next(createError(404, e));
    }
}