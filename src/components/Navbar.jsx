import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <div className={styles.links}>
        <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ""}>Home</NavLink>
        <NavLink to="/favorites" className={({ isActive }) => isActive ? styles.active : ""}>Favorites</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;