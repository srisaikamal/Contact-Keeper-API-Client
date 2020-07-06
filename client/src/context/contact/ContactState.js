import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "John Smith",
        email: "johnsmith@example",
        phone: "555-555",
        type: "personal",
      },
      {
        id: 2,
        name: "Kamal",
        email: "johnsmith@example",
        phone: "555-555",
        type: "professional",
      },
      {
        id: 3,
        name: "John Smith",
        email: "johnsmith@example",
        phone: "555-555",
        type: "personal",
      },
      {
        id: 4,
        name: "John Smith",
        email: "johnsmith@example",
        phone: "555-555",
        type: "professional",
      },
      {
        id: 5,
        name: "John Smith",
        email: "johnsmith@example",
        phone: "555-555",
        type: "personal",
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact

  // Delete Contact

  // Set Current Contact

  // Clear current contact

  // Update contact

  // Filter Contact

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};
export default ContactState;
