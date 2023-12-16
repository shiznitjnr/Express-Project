require('dotenv/configj')
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const mongoose = require("mongoose");
const connect = require('./config/db')

// routes

// app.get("/about", (req, res) => {
//   res.json({ message: "about page" });
// });

// app.get("/products", (req, res) => {
//   res.send("products page");
// });

// app.get('/services',(req,res)=>{
//     res.send('awa services')
// })

// server
// npm init -y (dis wud initialize npm and wud create node_modules folder,package.json file and also package-lock.json)
// npm i express ,dis wud create a server
// npm install --save-dev nodemon and do d below in ur script(found in package.json file)
// "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "dev":"nodemon index",
//     "start":"node index"
//   },
// remember to require express,use sample from express by searching for express on npmjs.com
// ===============
// We have 4 requests.get,post,delete and update request,which can be summed as crud operations -

// server

connect()
.then(()=>{
    try {
        app.listen(port, () =>
  console.log(`server is connected to http://localhost:${port}`)
);
    } catch (error) {
        console.log('cannot connect to the server');
        
    }
})

.catch((error)=>{
    console.log('invalid database connection..', error);
})

app.get("/", function (req, res) {
  res.send("app is running");
});

app.use((req, res) => {
  res.send("that route doesnt exist");
});
