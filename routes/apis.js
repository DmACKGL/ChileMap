var express = require('express');
var router = express.Router();
const request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('APIs ChileMap');
});

router.get('/bomberos/132', function(req, res, next) {
    request('https://central132.cl/llamados/ultimos', function (error, response, body) {
        res.send(body);
    });
});

module.exports = router;

