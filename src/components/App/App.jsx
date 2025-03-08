import initialContacts from "../../data/contacts.json";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import "./App.css";

export default function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const searchedContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.includes(filter)
  );

  const addContact = (newContact) => {
    const contactWithId = { id: nanoid(), ...newContact };
    setContacts((prevContacts) => [...prevContacts, contactWithId]);
  };
  const deleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };
  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onChange={handleFilterChange} />
      <ContactList list={searchedContacts} onDelete={deleteContact} />
    </div>
  );
}
