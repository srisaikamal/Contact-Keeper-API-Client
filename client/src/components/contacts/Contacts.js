import React, { useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";
import ContactsItem from "./ContactsItem";
import Spinner from "../layout/Spinner";

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);
  if (contacts !== null && !loading && contacts.length === 0)
    return <h4>Please add a contact</h4>;
  return (
    <>
      {contacts !== null && !loading ? (
        <>
          {filtered !== null
            ? filtered.map((contact) => (
                <ContactsItem contact={contact} key={contact._id} />
              ))
            : contacts.map((contact) => (
                <ContactsItem contact={contact} key={contact._id} />
              ))}
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Contacts;
