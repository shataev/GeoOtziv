const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const routes = require('./server/app/routes/index');
const db = require('./server/config/db');
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({
    extended: true
}));

MongoClient.connect(db.url, (err, database) => {
    if (err) {
        return console.log(err);
    }

    const myDb = database.db(db.dbName);

    routes(app, myDb);

    app.listen(port, () => {
        console.log('We are live on ' + port);
    });
});

