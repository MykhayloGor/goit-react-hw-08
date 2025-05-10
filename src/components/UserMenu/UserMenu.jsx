import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from '../../redux/auth/operations';
import { selectUsername } from '../../redux/auth/selectors';
import s from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const username = useSelector(selectUsername);

  return (
    <div className={s.wrapper}>
      <p className={s.username}>Welcome, {username}</p>
      <button 
        type="button" 
        className={s.button}
        onClick={() => dispatch(logoutThunk())}
      >
        Logout
      </button>
    </div>
  );
};