
//syntx for exporting multiple things
//if res.render() becomes before next,next never will b executed

exports.validateLoginFrom = (req, res, next){


    if(firstName==""){
//err
    }
    else{
        next()
    }

    
};
exports.validateRegForm = (req, res, next) => {

    next();
};
exports.validateAdminForm = (req, res, next) => {

    next();
};