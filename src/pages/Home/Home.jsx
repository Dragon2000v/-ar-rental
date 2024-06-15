import styles from './Home.module.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>
        Discover the world on wheels with our car rental service
      </p>
      <Link to={'/catalog'} className={styles.button}>
        Go to catalog
      </Link>
    </div>
  );
}
