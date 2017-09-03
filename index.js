var chalk = require('chalk');
var clear = require('clear');
var figlet = require('figlet');
var _ = require('lodash');
var fs = require('fs');
var touch = require('touch');

clear();
console.log(
  chalk.blue(
    figlet.textSync('DO CLI', { horixontalLayout: 'full' })
  )
)

// CREATE .tasks FILE
function createFile () {
  touch( '.tasks' );
}


// READ THE FILE
function readFile () {
  fs.readFile('.tasks', 'utf8', function(err, data) {
    var dataFromFile = JSON.parse(data);
    _.map(dataFromFile, function(task, index) {
      console.log((index + 1), task.title);
    });
  });
}


// ADD CONTENT TO THE FILE
function addContent (newTask) {
  fs.appendFile('.tasks', newTask, function(err) {
    if (err) throw err;
    console.log('updated');
  });
}

// createFile();
readFile();
// addContent('\nUpdated from the function');
