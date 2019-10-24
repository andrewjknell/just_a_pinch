const express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    app = express(),
    cors = require('cors'),
    request = require('request');

// app.use(cors({
//     'allowedHeaders': ['sessionId', 'Content-Type'],
//     'exposedHeaders': ['sessionId'],
//     'origin': '*',
//     'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     'preflightContinue': false
// }));
app.use(express.static(__dirname + '/public/dist/public'));

app.use(express.json());
app.get("/api/:id/:qid", (req, res) => {
    let options = {
        i: req.params.id,
        q: req.params.qid,
    }
    request(`http://www.recipepuppy.com/api/?i=${options.i}&q=${options.q}&p=1`, (error, response, body) => {
        if (error) {
            console.log(error)
        } else {
            res.json(body);
        }
    })
})
app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(8000, () => console.log('listening on port 8000'));