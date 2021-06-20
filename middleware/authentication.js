

exports.isAuthenticated = (req, res, next) => {

    const isAuthenticated = false;
    if (isAuthenticated) {
        next();
    }
    else {
        res.render("error");
    }
}

exports.isAuthorized=(req,res,next)=>{

    const isAuthorized=true;
    if(isAuthorized){
        next();
    }
    else{
        res.render("error");
    }
}