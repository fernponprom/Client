var express = require('express');
var app = express()

app.use(express.static(__dirname+ '/images'))

app.set('views', './views')
app.set('view engine', 'ejs')

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
