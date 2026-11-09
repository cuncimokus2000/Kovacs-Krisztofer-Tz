const express = require('express');
const mysql = require('mysql2/promise');
require('dotenv').config();


const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "raktar_db",
    port: 3307
});

const app = express();

const dbPool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

app.use("/", (req, res, next) => {
    res.send("express server");
});

app.get("/hello", (req, res, next) => {
    res.send("szia uram");
});

// Termékek lekérdezése
app.get('/termekek', async (req, res) => {
    try {
        const sql = `
        SELECT termekek.*
        FROM termekek
        JOIN kategoriak ON termekek.kategoria_id = kategoriak.id
        ORDER BY termekek.ar ASC;
        `;

        const [results] = await dbPool.query(sql);
        res.json(results);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Adatbázis hiba" });
    }
});
app.get('/termekek/elerheto', async (req, res) => {
    try {
        const sql = `
        SELECT * FROM termekek WHERE elerheto = 1 AND keszlet > 0;
        `;

        const [results] = await dbPool.query(sql);
        res.json(results);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Adatbázis hiba" });
    }
});

app.get('/termekek/kereses/:szoveg ', async (req, res) => {
    try {
        const sql = `
        SELECT * FROM termekek WHERE elerheto = 1 AND keszlet > 0;
        `;

        const [results] = await dbPool.query(sql);
        res.json(results);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Adatbázis hiba" });
    }
});


// Felhasználók lekérdezése
app.get('/api/users', async (req, res) => {
    try {
        const query = "SELECT id, name, email, created_at FROM users";
        const [rows] = await dbPool.query(query);
        res.json(rows);

    } catch (error) {
        console.error("Hiba a lekérdezés során:", error);
        res.status(500).json({ error: 'Adatbázis hiba:' });
    }
});

app.listen(3307, () => {
    console.log("A szerver fut");
});