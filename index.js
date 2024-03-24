const contacts = require('./contacts');
const { Command } = require('commander');

const command = new Command();

command
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'username')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

command.parse(process.argv);

const argv = command.opts();
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      contacts.listContacts();
      break;
    case 'get': {
      contacts.getContactById(id);
      break;
    }
    case 'remove': {
      contacts.removeContact(id);
      break;
    }
    case 'add': {
      contacts.addContact(name, email, phone);
      break;
    }
  }
}
invokeAction(argv);
