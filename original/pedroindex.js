const express = require ('express')
const app = express()
const cors = require("cors");

app.use(cors());
app.use(express.json());




const mysql = require('mysql')
const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"",
    database:"emp",
});
app.post('/create', (req,res)=>{
    const name = req.body.name;
    console.log(name);

    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const wage = req.body.wage;

    db.query(
        "INSERT INTO employeeslist (name, age, country, position, wage) VALUES(?,?,?,?,?)",
        [name, age, country,position,wage], (err,result) =>{
        if(err){
            console.log(err)
        } else {
            res.send("values Inserted")
        }
    }
    );
});

app.listen(3001, () => {
    console.log("yey, your server is running on port 3001");
}); 