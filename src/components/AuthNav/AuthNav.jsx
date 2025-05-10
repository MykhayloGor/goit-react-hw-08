import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';   

export const AuthNav = () => {
  return (
    <div className={s.nav}>
      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive ? `${s.link} ${s.active}` : s.link
        }
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? `${s.link} ${s.active}` : s.link
        }
      >
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;