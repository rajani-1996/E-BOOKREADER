const express = require('express');
const app = express();
const nav =
[
    {
        link:'/books',name:'BOOKS'
    }, 
    
    {
        link:'/author',name:'AUTHORS'
    }, 
    
  
];
const navSign =
[
    {
        Link:'/login',Name:'LOG IN'
    }, 
    
    {
        Link:'/signup',Name:'SIGN UP'
    }
];

const ebooksRouter = require('./src/routes/ebookRoutes')(nav,navSign)
const authorRouter = require('./src/routes/authorRoutes')(nav)
const loginRouter = require('./src/routes/loginRoutes')(nav)
const signupRouter = require('./src/routes/signupRoutes')(nav)

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');

app.use('/ebooks',ebooksRouter);
app.use('/author',authorRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);


app.get('/',function(req,res){
    res.render("index",
    {  
        nav,
        navSign,
        title: 'WELCOME TO E-BookReader'
    });
});


app.listen(5000);


