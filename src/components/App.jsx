import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Input } from './Input';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    let savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (savedContacts && savedContacts.length > 0) {
      setContacts(savedContacts);
    }
  }, []);

  useEffect(
    () => localStorage.setItem('contacts', JSON.stringify(contacts)),
    [contacts]
  );

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    )
      alert(`${name} is already in contacts.`);
    else
      setContacts(prev => [
        ...prev,
        { name: name, number: number, id: nanoid() },
      ]);
    form.reset();
  };

  const handleFilter = e => {
    setFilter(e.target.value.toLowerCase());
  };

  const getFilteredContacts = () =>
    contacts.filter(contact => contact.name.toLowerCase().includes(filter));

  const handleDelete = name => {
    setContacts(prev => prev.filter(contact => contact.name !== name));
  };

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Name</h3>
        <Input
          name="name"
          type="text"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
        <h3>Number</h3>
        <Input
          name="number"
          type="tel"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
        <button type="submit" className="button">
          Add contact
        </button>
      </form>
      <h2>Contacts</h2>
      <Filter handleFilter={handleFilter} />
      <ContactList
        contacts={getFilteredContacts()}
        handleDelete={handleDelete}
      />
    </div>
  );
};
