import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors"; 
import s from "./ContactForm.module.css";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts) || [];
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!Array.isArray(contacts)) {
      console.error('Contacts is not an array:', contacts);
      dispatch(addContact({ name, number }));
      setName("");
      setNumber("");
      return;
    }

    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, number }));
    setName("");
    setNumber("");
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.formGroup}>
        <label htmlFor="name" className={s.label}>
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={s.input}
          pattern="[a-zA-Z\s\-']+"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
        />
      </div>
      <div className={s.formGroup}>
        <label htmlFor="number" className={s.label}>
          Number
        </label>
        <input
          type="tel"
          name="number"
          id="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className={s.input}
          pattern="[0-9\+\-\.\(\)\s]+"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>
      <button type="submit" className={s.button}>
        Add contact
      </button>
    </form>
  );
};