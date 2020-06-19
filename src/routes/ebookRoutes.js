const express = require('express');
const ebookRouter = express.Router();
function router(nav){

    var ebooks = [

        {
            title:'AN ABSOLUTELY REMARKABLE THING',
            author:'AUTHOR: HANK GREEN',
            genre:'GENRE:  FICTION',
            img:'an-absolutely-remarkable-thing.jpg'
            // link:'http://novelfreereadonline.com/255113/an-absolutely-remarkable-thing'
        },
    
        {
            title:'DEFY ME',
            author:'AUTHOR: TAHEREH MAFI',
            genre:'GENRE: FICTION',
            img:'defy-me.jpg'
            // link:'http://novelfreereadonline.com/255103/defy-me" class="btn btn-primary'
        },
    
        {
            title:'SPARKS RISE',
            author:'AUTHOR: ALEXANDRA BRACKEN',
            genre:'GENRE: FICTION',
            img:'sparks-rise.jpg'
            // link:'http://novelfreereadonline.com/254951/sparks-rise'
        }
    ]
        var ebooks2 = [
    
            {
                title:'THE INNOCENT',
                author:'AUTHOR: HARLAN COBEN',
                genre:'GENRE: ADVENTURE',
                img:'The-Innocent.jpg'
                // link:'http://novelfreereadonline.com/243661/the-innocent'
            },
    
            {
                title:'THE CHEMIST',
                author:'AUTHOR: STEPHENIE MEYER',
                genre:'GENRE: THRILLER',
                img:'the-chemist.jpg'
                // link:'http://novelfreereadonline.com/254556/the-chemist'
            },
        
            {
                title:'COLD FIRE',
                author:'AUTHOR: DEAN KOONTZ',
                genre:'GENRE: THRILLER',
                img:'Cold-Fire.jpg'
                // link:'http://novelfreereadonline.com/243983/cold-fire'
            }

            
        ]
    
    var ebooks3 = [
    
        {
            title:'HOLLOWMEN',
            author:'AUTHOR: AMANDA HOCKING',
            genre:'GENRE: HORRER',
            img:'hollowmen.jpg'
            // link:'http://novelfreereadonline.com/254883/hollowmen'
        },
    
        {
            title:'AMONG MONSTERS',
            author:'AUTHOR:  JAMES MC GAUIRE',
            genre:'GENRE: HORRER',
            img:'among-monsters.jpg'
            // link:'novelfreereadonline.com/253821/among-monsters'
        },
    
        {
            title:'GIRL OF NIGHTMARES',
            author:'AUTHOR: KENDARE BLAKE',
            genre:'GENRE: HORRER',
            img:'girl-of-nightmares.jpg'
            // link:'http://novelfreereadonline.com/253703/girl-of-nightmares'
        }
    ]
    
    var ebooks4 = [
    
        {
            title:'DESTROYED',
            author:'AUTHOR: PEPPER WINTERS',
            genre:'GENRE: ADVENTURE',
            img:'destroyed-Pepper-Winters.jpg'
            // link:'http://novelfreereadonline.com/253488/destroyed'
        },
    
        {
            title:'ON STRANGER TIDES',
            author:'AUTHOR:TIM POWERS',
            genre:'GENRE: ADVENTURE',
            img:'On-Stranger-Tides.jpg'
            // link:'http://novelfreereadonline.com/243675/on-stranger-tides'
        },
    
        {
            title:'PRINCE CASPIAN',
            author:'AUTHOR: C S LEWIS',
            genre:'GENRE: ADVENTURE',
            img:'Prince-Caspian.jpg'
            // link:'http://novelfreereadonline.com/242817/prince-caspian'
        }
    ]
    
    
    ebookRouter.get('/',function(req,res){
        res.render("ebooks",{
            nav,
            title: 'WELCOME TO E-BookReader',
            ebooks,
            ebooks2,
            ebooks3,
            ebooks4
    
            
        });
    });
    
    ebookRouter.get('/:id', function(req,res){
       const id = req.params.id
        res.render('ebook',{
            nav,
            navSign,
            title: 'WELCOME TO E-BookReader',   
            ebook:ebooks[id]
        });
    });

return ebookRouter;

}

module.exports = router;