var express = require('express');
var app = express();
app.set('views', './views') 
app.set('view engine', 'ejs') 
  
app.get('/fruit', function(req, res){ 
   res.render('fruit', {fruits: ['banana', 'apple']}) 
})
app.listen(8000);
