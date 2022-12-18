// var http = require('http');
// const fs=require('fs');
// const path=require('path');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   let url=req.url;
//   if(url==='/'){
//     fs.readFile(path.join(__dirname,'index.html'),function(err,data){
//         if(err)
//          throw err;
//          res.render(data);
//        });
//   }
//   else if(url==='/about'){
//     fs.readFile(path.join(__dirname,'about.html'),function(err,data){
//         if(err)
//          throw err;
//          res.render(data);
//        });
//   }
//   else if(url==='/contact'){
//     fs.readFile(path.join(__dirname,'contact.html'),function(err,data){
//         if(err)
//          throw err;
//          res.render(data);
//        });
//   }
//   else if(url==='/service'){
//     fs.readFile(path.join(__dirname,'service.html'),function(err,data){
//         if(err)
//          throw err;
//          res.render(data);
//        });
//   }

// }).listen(8170);this is node base routing but it is slow so using express.js(framework of node.js) and it's middleware we can build routing
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/home.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});

router.get('/service',function(req,res){
  res.sendFile(path.join(__dirname+'/sitemap.html'));
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');

