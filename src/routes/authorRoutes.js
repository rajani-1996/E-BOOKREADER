const express = require('express');
const authorRouter = express.Router();
function router(nav){


    
    authorRouter.get('/',function(req,res){
        res.render("author",{
            nav,
            
            title: 'WELCOME TO E-BookReader'
        });
    });
    

return authorRouter;

}

module.exports = router;  