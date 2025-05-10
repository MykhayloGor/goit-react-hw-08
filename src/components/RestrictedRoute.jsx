import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

const RestrictedRoute = ({ children, redirectTo = '/contacts' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  
  if (isLoggedIn) {
    return <Navigate to={redirectTo} />;
  }
  
  return children;
};

export default RestrictedRoute;