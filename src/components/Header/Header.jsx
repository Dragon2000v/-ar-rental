import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import clsx from 'clsx';
import logo from '/logo.png';
import { motion } from 'framer-motion';

export const Header = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <motion.nav
      initial={{ transform: 'translateY(-100%)' }}
      animate={{ transform: 'translateY(0)' }}
      transition={{ duration: 0.3 }}
      className={s.nav}
    >
      <NavLink className={s.logoLink} to="/">
        <img className={s.img} src={logo} alt="logo" />
        <span className={s.logo}>Rent Car</span>
      </NavLink>
      <ul className={s.ul}>
        <li className={s.li}>
          <NavLink className={buildLinkClass} to="/">
            Home
          </NavLink>
        </li>
        <li className={s.li}>
          <NavLink className={buildLinkClass} to="/catalog">
            Catalog
          </NavLink>
        </li>
        <li className={s.li}>
          <NavLink className={buildLinkClass} to="/favorites">
            Favorites
          </NavLink>
        </li>
      </ul>
    </motion.nav>
  );
};
