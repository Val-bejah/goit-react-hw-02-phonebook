import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';

const ContactList = ({ contacts, setContacts, filter }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <ul>
      {filteredContacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          onDelete={() => handleDelete(contact.id)}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  setContacts: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default ContactList;
