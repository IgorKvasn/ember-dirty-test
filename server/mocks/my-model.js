/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var myModelRouter = express.Router();

  myModelRouter.get('/', function(req, res) {
    res.send({
      'my-model': []
    });
  });

  myModelRouter.post('/', function(req, res) {
    res.send({
      'my-model': {
        id: req.params.id,
        myNumber: 42
      }
    });
  });

  myModelRouter.get('/:id', function(req, res) {
    res.send({
      'my-model': {
        id: req.params.id,
        myNumber: 42,
        myString: 'hello'
      }
    });
  });

  myModelRouter.put('/:id', function(req, res) {
    res.send({
      'my-model': {
        id: req.params.id
      }
    });
  });

  myModelRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/my-model', require('body-parser'));
  app.use('/myModels', myModelRouter);
};
