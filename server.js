
const express = require("express");
const app = express();

app.use("/", (req, res, next) => { 
    res.send("express server"); 
}) 

app.get("/hello", (req, res, next) => { 
    res.send("szia uram"); 
}) 


app.listen(3307, () => { 
    console.log("A szerver fut"); 
})


app.get('/termekek', (req, res) => {
    const sql = `
    SELECT termekek.* FROM termekek join kategoriak ON termekek.kategoria_id = kategoria_id ORDER BY termekek.ar ASC;`;
    db.query(sql, (error,results) => {

        if (error){

            return res.status(500).json( "hiba: error message(500-as)")
        }
    })
})