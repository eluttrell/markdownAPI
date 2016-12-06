const fs = require('fs'),
      express = require('express'),
      app = express(),
      bodyParser = require('body-Parser'),

app.use(bodyParser.json());

app.put('/documents/:filepath', function(req, res) {
    var path = req.params.filepath
    fs.writeFile()
})
