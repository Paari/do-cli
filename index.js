var chalk = require('chalk');
var clear = require('clear');
var figlet = require('figlet');

clear();
console.log(
  chalk.blue(
    figlet.textSync('DO CLI', { horixontalLayout: 'full' })
  )
)
