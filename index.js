const express = require("express");
const db = require("./models");
const { Sequelize } = require("sequelize");
// const sequelize = require("./database.js");
// const Instructor = require("./models/instructor.js");
const app = express();
const port = 3000;


app.get("/", (req, res)=>{
	res.send("hello world");
})

const sequelize = new Sequelize('postgres://postgres:sequelize@localhost:5432/test');

db.sequelize.sync({alter : true})
	.then(result  => {
		console.log(result);
	})
	.catch(err => {
		console.log(err);
	})

app.listen(port, ()=>{
	console.log("listening to port 3000.");
})