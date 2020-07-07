import React, { useContext, useEffect } from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../contacts/ContactFilter";
import AuthContext from "../../context/auth/authContext";
const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
  }, []);
  return (
    <div className="grid-2">
      <div className="">
        <ContactForm />
      </div>
      <div className="">
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
