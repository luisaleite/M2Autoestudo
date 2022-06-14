import express from 'express';
import sqlite3 from 'sqlite3';
// const express = require('express');

const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
// const sqlite3 = require('sqlite3').verbose();

const DBPATH = 'dbUser.db';
//creatingTable();

app.get('/user', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = `SELECT * FROM Academica`;
    
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.send(JSON.stringify(rows));
    });
    db.close(); // Fecha o banco
});

app.listen(3020, () => console.log("rodei3000"));