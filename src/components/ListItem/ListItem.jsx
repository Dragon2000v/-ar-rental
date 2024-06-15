import { useDispatch } from 'react-redux';
import { Button } from '../Button/Button';
import s from './ListItem.module.css';
import {
  addCurrentCar,
  addFavoriteCar,
  removeFavoriteCar,
} from '../../redux/catalog/slice';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import image from '/noCar.png';

export const ListItem = ({ car, isLiked, openModal }) => {
  const [city, country] = car.address.split(',').slice(1);
  const description = [
    city,
    country,
    car.rentalCompany,
    car.type,
    car.id,
    car.functionalities[0],
  ];

  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(addCurrentCar(car));
    openModal();
  };
  const onHeartBtn = () => {
    isLiked
      ? dispatch(removeFavoriteCar(car.id))
      : dispatch(addFavoriteCar(car.id));
  };
  return (
    <li className={s.item}>
      <button
        className={s.heart_button}
        type="button"
        onClick={() => onHeartBtn()}
      >
        {isLiked ? (
          <FaHeart color="#3470ff" className={s.svg} />
        ) : (
          <FaRegHeart color="rgba(255, 255, 255, 0.8)" className={s.svg} />
        )}
      </button>
      <img
        className={s.img}
        src={car.img ?? car.photoLink ?? image}
        alt={car.desc}
      />
      <div className={s.description_wrapper}>
        <h3 className={s.title}>
          {car.make} <span className={s.model}>{car.model}</span>, {car.year}
          <span className={s.price}>{car.rentalPrice}</span>
        </h3>
        <ul className={s.desc}>
          {description.map((item, i) => (
            <li key={car.id + item + i} className={s.desc_item}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <Button width="100%" onClick={onClick}>
        Learn more
      </Button>
    </li>
  );
};
