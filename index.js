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

function createFile () {
  touch( '.tasks' );
}

createFile()
