const express = require('express');
const authorRouter = express.Router();
function router(nav){

    var author = [

        {
           
            author:'JANE AUSTIN',
            dob:'16 December 1775',
            img:'aut1.jpg'
        },
    
        {
            author:'MARK TWAIN',
            dob:'30 November 1835',
            img:'twain.jpg'
        },
    
    
        {
            author:'BRAM STOCKER',
            dob:'8 November 1847',
            img:'aut3.jpg'
        },

        
        {
            author:'CHARLES DICKENS',
            dob:'9 JUNE 1870',
            img:'aut4.jpg'
        },

        
        {
            author:'K R MEERA',
            dob:'19 February 1970',
            img:'aut12.jpg'
        },

        
        {
            author:'M T VASUDEVAN NAIR',
            dob:'9 AUGUST 1933',
            img:'aut7.jpg'
        }

        
    ];
  
    authorRouter.get('/',function(req,res){
        res.render("author",{
            nav,
            title: 'WELCOME TO DIGITAL LIBRARY',
            author,
           
        
        });
    });
    
    authorRouter.get('/:id',function(req,res){
       const id = req.params.id
      
        res.render('authorSingle',{
            nav,
            title: 'WELCOME TO DIGITAL LIBRARY',   
            authorSingle:author[id],
            
        });
    });

return authorRouter;

}

module.exports = router;  