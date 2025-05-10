import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import { 
  selectIsLoading, 
  selectError, 
  selectContacts,  
  selectFilteredContacts 
} from '../../redux/contacts/selectors';
import { ContactList } from '../../components/ContactList/ContactList';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import styles from './ContactsPage.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();
  
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contacts</h1>
      
      <div className={styles.formSection}>
        <h2 className={styles.sectionTitle}>Add Contact</h2>
        <ContactForm />
      </div>
      
      <div className={styles.filterSection}>
        <h2 className={styles.sectionTitle}>Find Contacts</h2>
        <SearchBox />
      </div>
      
      <div className={styles.listSection}>
        <h2 className={styles.sectionTitle}>Your Contacts</h2>
        {isLoading && <p>Loading contacts...</p>}
        {error && <p>Error: {error}</p>}
        {!isLoading && !error && contacts.length === 0 && (
          <p>No contacts found. Add your first contact.</p>
        )}
        {contacts.length > 0 && <ContactList />}
      </div>
    </div>
  );
};

export default ContactsPage;