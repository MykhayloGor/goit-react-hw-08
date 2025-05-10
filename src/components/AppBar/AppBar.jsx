

import { useSelector } from "react-redux"; 
import { Navigation } from "../Navigation/Navigation"; 
import { UserMenu } from "../UserMenu/UserMenu"; 
import { AuthNav } from "../AuthNav/AuthNav"; 
import { selectIsLoggedIn } from "../../redux/auth/selectors"; 
import s from "./AppBar.module.css";  

const AppBar = () => {   
  const isLoggedIn = useSelector(selectIsLoggedIn);    
  
  return (     
    <header className={s.header}>
      <div className={s.headerContainer}>
        <Navigation />       
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>     
    </header>   
  ); 
};  

export default AppBar;