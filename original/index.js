const express = require ('express')
const app = express()
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

const router = require('./routes/studentRouter.js')
app.use('/api/students', router)

const db = require("./models");
db.sequelize.sync({alter: true })
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.get('/',(req,res) => {
    res.json({message:"message from api"});
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`yey, your server is running on port ${PORT}`);
}); 



