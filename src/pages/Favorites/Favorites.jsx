import { useEffect } from 'react';
import { List } from '../../components/List/List';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllThunk } from '../../redux/catalog/operations';
import {
  selectFavoriteCars,
  selectLoading,
} from '../../redux/catalog/selectors';

import s from './Favorites.module.css';
import { FavoritesEmpty } from '../../components/FavoritesEmpty/FavoritesEmpty';
import { Loader } from '../../components/Loader/Loader';

const Favorites = ({ openModal }) => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchAllThunk());
  }, [dispatch]);
  const cars = useSelector(selectFavoriteCars);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : cars.length > 0 ? (
        <>
          <h2 className={s.heading}>Your favorite offers: </h2>
          <List
            cars={cars}
            openModal={openModal}
          />
        </>
      ) : (
        <FavoritesEmpty />
      )}
    </div>
  );
};

export default Favorites;
