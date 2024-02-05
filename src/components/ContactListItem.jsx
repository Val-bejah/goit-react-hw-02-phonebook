import React from 'react';
import PropTypes from 'prop-types';

function ContactListItem({ contact, onDelete }) {
  return (
    <li>
      {contact.name}: {contact.number}{' '}
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
