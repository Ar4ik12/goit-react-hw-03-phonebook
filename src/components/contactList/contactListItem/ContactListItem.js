import React from "react";

const ContactListItem = ({ contact: { id, name, number }, deleteContact }) => (
  <li>
    <span> {name}: </span>
    <span> {number}</span>
    <button type="button" id={id} onClick={deleteContact}>
      delete
    </button>
  </li>
);

export default ContactListItem;
