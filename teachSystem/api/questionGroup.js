'use strict'
const questionGroupDao = require('../dao/questionGroupDao.js');
const questionGroupHelper = require('./questionGroupHelper.js');
/**
 * 条件检索
 */
exports["GET /question_group"] = async (ctx, next) => {
    let param = questionGroupHelper.getParam(ctx.allParams);
    let res = await questionGroupDao.getByParam(param);
    ctx.onSuccess(res);
}

/**
 * 获取本题组所有题目
 */
exports["GET /question_group/:qg_id/all_question"] = async (ctx,next)=>{
    let param = questionGroupHelper.getParam(ctx.allParams);
    console.log(param)
    let res = await questionGroupDao.getQuestion(ctx.params.qg_id);
    console.log(param.is_download)
    if (param.is_download == "true") {
        console.log("11111")
        console.log(JSON.parse(res))
        ctx.onSuccess({"msg":"开始下载"});
        
    } else {
        console.log("2222")
        ctx.onSuccess(res);
    }
    
}



/**
 * 新增一组题目
 */
exports["POST /course/:c_id/question_group"] = async (ctx, next) => {
    let res = await questionGroupDao.addOne(ctx.params.c_id, ctx.allParams);
    ctx.onSuccess(res);
}

/**
 * 删除一个题组
 */
exports["DELETE /course/:c_id/question_group/:qg_id"] = async(ctx,next)=>{
    await questionGroupDao.deleteOne(ctx.params.c_id,ctx.params.qg_id);
    ctx.onSuccess();
}