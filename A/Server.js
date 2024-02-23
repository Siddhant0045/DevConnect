const express = require('express');
const app = express(); 
const bodyParser = require('body-parser');
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/public/login.html');
// });

// app.post('/login', (req, res) => {
//     // Simulate authentication logic
//     const { username, password } = req.body;
    
//     // Check if username and password are correct
//     if (username === 'user' && password === 'password') {
//       // If correct, send a success response
//       //res.redirect(__dirname + '/public/landing_page.html');
//       res.status(200).json({ message: 'Login successful' });
      
      
//     } else {
//       // If incorrect, send an error response
//       res.status(401).json({ message: 'Invalid username or password' });
//     }
//   });

app.post('/login', (req, res) => {
    const {username, password} = req.body;
    if(username == 'admin' && password =='password'){
        res.render("landing_page.ejs");
    }
    else{
        res.status(401).json({message: 'Invalid password or username'});
    }
});

app.get('/', (req, res) => {
    res.render("login.ejs");
});

app.get('/landing_page', (req, res) => {
    res.render("landing_page.ejs");
});


app.post('/toCreateProject', (req, res) => {
    res.render("createProject.ejs");
});


app.post('/findprojectpage', (req, res) => {
    res.render("findprojectpage.ejs");
});

app.post('/myprojects', (req, res) => {
    res.render("myprojects.ejs");
});
  const port = 3000 // Port we will listen on

// Function to listen on the port
app.listen(port, () => console.log(`This app is listening on port ${port}`));


