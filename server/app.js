const express = require('express');
const morgan = require('morgan');
var bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

var mockData = [
    {
      todoItemId: 0,
      name: 'an item',
      priority: 3,
      completed: false
    },
    {
      todoItemId: 1,
      name: 'another item',
      priority: 2,
      completed: false
    },
    {
      todoItemId: 2,
      name: 'a done item',
      priority: 1,
      completed: true
    }
];


// add your code here
app.get('/', (req, res) => {
    res.status(200).send({status : 'ok'});
});

app.get('/api/TodoItems/', (req, res) => {
    res.status(200).send(mockData);
    // res.send('OK');
});

app.get('/api/TodoItems/:number', (req, res)=> {
    // res.status(200).send(mockData[0].todoItemId);
    // var nums = mockData[0].todoItemId;
    // if (req.params.number) {
    //   res.send(mockData[0][todoItemId])
    // }
    var toNotdo = mockData.find(todo => todo.todoItemId == req.params.number)

    if (!toNotdo) {
      return res.status(404).send(`ID not found: ${req.params.number}`)
    }
    res.send(toNotdo)
});

app.post('/api/TodoItems/', (req, res) => {
  var toNotdo = mockData.slice(todo => todo.todoItemId == req.params.number)
res.status(201).json(toNotdo[0]);
});

app.delete('/api/TodoItems/:number', (req, res) => {
  var toNotdo = mockData.find(todo => todo.todoItemId == req.params.number);
  res.json(toNotdo);
});
module.exports = app;

// == checks for value ("1", 1), not type (types: number, array, null, string, undefined, symbol)
// = : assignment operator
// == : equality comparator
// === : identity comparator