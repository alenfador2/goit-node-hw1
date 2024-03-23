const contacts = require('./contacts');
const { Command } = require('commander');
const command = new Command();
command.option('-a, -action <type>', 'choose action');
