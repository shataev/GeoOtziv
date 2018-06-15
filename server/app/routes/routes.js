const dbConfig = require('../../config/db');
const express = require("express");
const ejs = require('ejs');
const path = require('path');
const fs = require('fs');
const ObjectId = require('mongodb').ObjectID;

module.exports = (app, db) => {
    //Путь монтирования для статического каталога
    app.use('/', express.static(__dirname + './../../../dist'));

    //Указание папки с вьюхами и типа файла вьюхи
    app.set('views', path.join(__dirname + './../../../dist'));
    app.engine('html', ejs.renderFile);
    app.set('view engine', 'html');

    //Данные по всем отзывам
    app.get('/reviews', (req, res) => {
        db.collection(dbConfig.collectionName).find({}).toArray((err, data) => {
            if (err) {
                res.send({
                    'error': 'An error has occurred'
                });
            } else {
                res.send(data);
            }
        })
    });

    //Запись отзыва в базу данных
    app.post('/reviews', (req, res) => {
        const note = {
            coords: req.body.coords,
            adress: req.body.adress,
            review: req.body.review
        };

        db.collection(dbConfig.collectionName).insert(note, (err, result) => {
            if (err) {
                console.log(err);
                res.send({
                    'error': 'An error has occurred'
                });
            } else {
                res.send(result.ops[0]);
            }
        })
    });

   /* app.get('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectId(id) };

        db.collection(dbConfig.collectionName).findOne(details, (err, item) => {
            if (err) {
                res.send({
                    'error': 'An error has occurred'
                });
            } else {
                res.send(item);
            }
        })
    });

    app.post('/notes', (req, res) => {
        const note = {
            text: req.body.body,
            title: req.body.title
        };

        db.collection(dbConfig.collectionName).insert(note, (err, result) => {
            if (err) {
                console.log(err);
                res.send({
                    'error': 'An error has occurred'
                });
            } else {
                res.send(result.ops[0]);
            }
        })
    });

    app.delete('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectId(id) };
        db.collection(dbConfig.collectionName).remove(details, (err, item) => {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send('Note ' + id + ' deleted!');
            }
        });
    });

    app.put('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectId(id)};
        const note = {text: req.body.body, title: req.body.title};

        db.collection(dbConfig.collectionName).update(details, note, (err, result) => {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send(note);
            }
        })
    })*/
};