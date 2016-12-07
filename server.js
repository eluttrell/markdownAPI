const fs = require('fs'),
    express = require('express'),
    app = express(),
    bodyParser = require('body-Parser');

app.use(bodyParser.json());
app.set('view engine', 'hbs');

app.put('/documents/:filepath', function(req, res) {
    let filepath = './data/' + req.params.filepath;
    let contents = req.body.contents;
    fs.writeFile(filepath, contents, (err) => {
        if (err) {
            res.status(500);
            res.json({
                message: 'Could not save file: ' + err.message
            });
        } else {
            res.json({
                message: 'File ' + filepath + ' saved.'
            });
            console.log('It\'s saved!');
        }
    });
});

app.get('/documents/:filepath', function(req, res) {
    let filepath = './data/' + req.params.filepath;
    let contents = req.body.contents;
    fs.readFile(filepath, 'utf8', (err, data) => {
      if (err) {
        res.status(404);
        res.json({
          message: 'Requested file not found. ' + err.message
        });
      } else {
        res.json({
          message: data
        });
      }
    });
});

app.get('/documents/:filepath/display', function(req, res) {

})

app.listen(1337, function() {
  console.log('Listening to 1337');
});
