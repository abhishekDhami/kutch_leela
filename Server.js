const express = require('express');
const app = express();


   app.get('/Home', (req, res) => {
         res.sendFile('./views/home.html',{root: __dirname });
        
  });

  app.get('/Contact', (req, res) => {
    res.sendFile('./views/contact.html',{root: __dirname });
   
});

app.get('/Login', (req, res) => {
  res.sendFile('./views/Login.html',{root: __dirname });
 
});

app.get('/User/*', (req, res) => {
  console.log(req.query.uname);
  res.sendFile('./views/user.html',{root: __dirname });
 
});



// str= cmd.run('node -v');




// Listen to the App Engine-specified port, or 8080 otherwisenpm
 const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
  });