import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import s from './ContactList.module.css';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={s.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <Contact id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};