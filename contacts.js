const fs = require('fs');
const path = require('path');
const contactsPath = path.parse('./db/contacts.json');
console.log(contactsPath);

function listContacts() {
  fs.readFile(contactsPath);
}
function getContactById() {}
function removeContact() {}
function addContact() {}

module.exports = {
  contactsPath,
  listContacts,
};
