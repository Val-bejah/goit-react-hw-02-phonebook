import React from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { useState } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  // const handleFilterChange = e => {
  //   setFilter(e.target.value);
  // };

  const filteredContacts = contacts
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : [];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: 'black',
        background: '#fff3cd',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} setContacts={setContacts} />
      <h2>Contacts</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <ContactList
        contacts={filteredContacts}
        setContacts={setContacts}
        filter={filter}
      />
    </div>
  );
};
