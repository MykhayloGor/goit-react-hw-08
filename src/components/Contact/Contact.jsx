import { useDispatch } from 'react-redux';
import { FaUser, FaPhone } from 'react-icons/fa';
import { deleteContact } from '../../redux/contactsOps';
import s from './Contact.module.css';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={s.contact}>
      <div className={s.contactInfo}>
        <div className={s.contactRow}>
          <FaUser className={s.icon} />
          <span className={s.contactName}>{name}</span>
        </div>
        <div className={s.contactRow}>
          <FaPhone className={s.icon} />
          <span className={s.contactNumber}>{number}</span>
        </div>
      </div>
      <button
        type="button"
        className={s.deleteBtn}
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};