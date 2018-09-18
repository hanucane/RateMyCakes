const express = require("express");
const path = require("path");
const router = require("./server/routes.js");

const app = express();
app.use(express.static(path.join(__dirname,"/angular/dist/angular")));
router(app);

app.all("*", (req,res)=>res.sendFile(path.join(__dirname, "/angular/dist/angular/index.html")));

app.listen(8000, (errs)=>console.log(errs?errs:"Application Running"))