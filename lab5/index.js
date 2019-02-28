<<<<<<< HEAD
var express = require('express')
var app = express()
var session = require('express-session')
var BodyParser = require('body-parser')
const PORT = 7777;
=======
var express = require('express');
var app = express()

app.use(express.static(__dirname+ '/images'))
>>>>>>> 4d2e3c839bc616c2503159d38abe301980040b5c

app.set('views', './views')
app.set('view engine', 'ejs')

<<<<<<< HEAD
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 },
   resave : false, saveUninitialized: false }))
app.use(BodyParser())


var status =true ;
app.get('/', (req, res)=>{
    res.render('login',{status})
 })


app.get('/admin',(req,res)=>{
    if(req.session.email){
        res.render('admin')
    }else{
        res.write('<h1>Please login first.</h1>')
		res.write('<a href="/"><button>login</button></a>')
		res.end()
    }
})
app.post('/admin', (req, res)=>{
    if(req.body.password!=='240311'){
        status = false
        res.render('login',{status})
    }else{
        status =true
        data= {
            email : req.body.email
        }
        req.session.email = req.body.email;
        res.render('admin',{data})
    }
 })
 app.get('/logout',(req,res)=>{
     req.session.destroy((err)=>{
        // if(err) console.log(err)
        // else 
        res.redirect('/')
     })
 })
app.listen(PORT,()=>{
    console.log("running : " + PORT)
});
=======
app.get('/', (req, res)=> {
    res.send('HELLO WORLD')
})

app.get('/fruit', (req, res) =>{
   res.render('fruit', {fruits: ['banana', 'apple'] , foo: 'bar'})
})



app.get('/computer', (req, res) => {
    res.render('computer', {
        computers:[{name:'window', photo:'/Window.jpg'},
              {name:'OSX', photo:'/OSX.jpg'},
              {name:'Android', photo:'/Android.jpg'},
              {name:'IOS', photo:'/IOS.jpg'}
    ]
    })
})
 
app.listen(8000)
>>>>>>> 4d2e3c839bc616c2503159d38abe301980040b5c
