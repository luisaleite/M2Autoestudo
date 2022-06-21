import express from 'express';
import sqlite3 from 'sqlite3';
import {creatingTable, insertUser, updateUser} from './Controler/User.js';
//const sqlite3 = require("sqlite3").verbose();
//const express = require('express');


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

// Insere um registro (é o C do CRUD - Create)
app.post('/userinsert', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

    sql = "INSERT INTO Academica (Instituicao, Curso) VALUES ('" + req.body.Instituicao + "', '" + req.body.Curso + "')";
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
    });
    db.close(); // Fecha o banco
    res.end();
});

// Atualiza um registro (é o U do CRUD - Update)
app.post('/userupdate', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

    sql = "UPDATE Academica SET Instituicao = '" + req.body.Instituicao + "' WHERE id = " + req.body.id;
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
        res.end();
    });
    db.close(); // Fecha o banco
});

// Exclui um registro (é o D do CRUD - Delete)
app.post('/userdelete', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

    sql = "DELETE FROM Academica WHERE id = " + req.body.id;
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
        res.end();
    });
    db.close(); // Fecha o banco
});

app.listen(3000, () => console.log("rodei3000"));