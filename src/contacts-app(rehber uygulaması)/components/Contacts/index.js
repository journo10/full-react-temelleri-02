import { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";
import "./styles.css"

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Mehmet",
      phone_number: "123123",
    },
    {
      fullname: "Ayşe",
      phone_number: "456457",
    },
    {
      fullname: "Nazlı",
      phone_number: "987659",
    },
  ]); //eklenen kayıtlar

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      <h1>Rehber App</h1>
      <List contacts={contacts} />
      <Form addContacts={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
