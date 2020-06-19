const express = require('express');
const signupRouter = express.Router();
function router(nav){


    
    signupRouter.get('/',function(req,res){
        res.render("signup",{
            nav,
            title: 'WELCOME TO E-BookReader'
        });
    });
    

return signupRouter;

}

module.exports = router;  