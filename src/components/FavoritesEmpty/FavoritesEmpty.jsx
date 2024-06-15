import { Link } from 'react-router-dom';
import s from './FavoritesEmpty.module.css';
import image from '/cars.png';
import { motion } from 'framer-motion';
export const FavoritesEmpty = () => {
  return (
    <motion.div
      className={s.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className={s.heading}>Time to add something here!</h2>
      <Link className={s.link} to="/catalog">
        Catalog page
      </Link>
      <img src={image} alt="cars" />
    </motion.div>
  );
};
