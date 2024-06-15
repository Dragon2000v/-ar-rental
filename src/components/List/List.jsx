import { useSelector } from 'react-redux';
import { ListItem } from '../ListItem/ListItem';
import s from './List.module.css';
import { selectFavoriteCarsIds } from '../../redux/catalog/selectors';

export const List = ({ cars, openModal }) => {
  const favorites = useSelector(selectFavoriteCarsIds);
  return (
    <ul className={s.list}>
      {cars.map((car) => (
        <ListItem
          openModal={openModal}
          key={car.id}
          car={car}
          isLiked={favorites.includes(car.id)}
        />
      ))}
    </ul>
  );
};
