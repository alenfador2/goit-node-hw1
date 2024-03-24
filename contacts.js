const fs = require('fs').promises;
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const colors = require('colors');
const contactsPath = path.join(
  __dirname,
  '../goit-node-hw1/db',
  'contacts.json'
);

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    console.table(contacts);
  } catch (error) {
    console.log('Error: '.red, error.message);
  }
}
async function getContactById(id) {
  try {
    const data = await fs.readFile(contactsPath);
    const items = JSON.parse(data);
    items.find(item => {
      if (item.id === id) {
        console.table(item);
      }
    });
  } catch (error) {
    console.log('Error: '.red, error.message);
  }
}

async function removeContact(id) {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    const contactToRemove = contacts.find(contact => contact.id === id);
    if (!contactToRemove) {
      console.log(`Contact with id ${id} not found...`.yellow);
      return;
    }
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    fs.writeFile(contactsPath, JSON.stringify(updatedContacts), error => {
      if (error) {
        console.log('Error: '.red, error.message);
      }
    });
    console.table(contacts);
    console.log(`Contact with id: ${id} successfully removed!`.green);
  } catch (error) {
    console.log('Error: ', error.message);
  }
}

async function addContact(name, email, phone) {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    const contact = { id: uuidv4(), name, email, phone };
    const newContacts = [...contacts, contact];
    fs.writeFile(contactsPath, JSON.stringify(newContacts), error => {
      console.log(error);
    });
    console.table(newContacts);
    console.log(`Contact ${name} successfully added!`.green);
  } catch (error) {
    console.log('Error: ', error.message);
  }
}

module.exports = {
  contactsPath,
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
