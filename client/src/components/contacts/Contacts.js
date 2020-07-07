import React, { useContext } from "react";
import ContactContext from "../../context/contact/contactContext";
import ContactsItem from "./ContactsItem";

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) return <h4>Please add a contact</h4>;
  return (
    <>
      {filtered !== null
        ? filtered.map((contact) => (
            <ContactsItem contact={contact} key={contact.id} />
          ))
        : contacts.map((contact) => (
            <ContactsItem contact={contact} key={contact.id} />
          ))}
    </>
  );
};

export default Contacts;
