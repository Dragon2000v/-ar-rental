import { useSelector } from 'react-redux';
import { selectCurrentCar } from '../../redux/catalog/selectors';
import s from './ModalCar.module.css';
import clsx from 'clsx';
import { numberFormat } from '../../helpers/numberFormat';
import { IoClose } from 'react-icons/io5';
import image from '/noCar.png';

export const ModalCar = ({ closeModal }) => {
  const car = useSelector(selectCurrentCar);
  const [city, country] = car.address.split(',').slice(1);
  const description = [
    city,
    country,
    'Id: ' + car.id,
    'Year: ' + car.year,
    'Type: ' + car.type,
    'Fuel Consumption: ' + car.fuelConsumption,
    'Engine Size: ' + car.engineSize,
  ];

  const rentalConditions = car.rentalConditions.split('\n');
  const regex = /[0-9]+$/;

  return (
    <div className={s.modal_wrapper}>
      <button
        className={s.close_btn}
        type="button"
        onClick={() => closeModal()}
      >
        <IoClose className={s.svg} />
      </button>
      <img
        className={s.img}
        src={car.img ?? car.photoLink ?? image}
        alt={car.desc}
      />
      <div className={s.description_wrapper}>
        <h3 className={s.title}>
          {car.make} <span className={s.model}>{car.model}</span>, {car.year}
        </h3>
        <ul className={s.list}>
          {description.map((item, i) => (
            <li key={car.id + item + i} className={s.desc_item}>
              {item}
            </li>
          ))}
        </ul>
        <p className={s.car_description}>{car.description}</p>
      </div>
      <div className={s.description_wrapper}>
        <h4 className={s.subtitle}>Accessories and functionalities:</h4>
        <ul className={clsx(s.list, s.sublist)}>
          {car.accessories.map((item, i) => (
            <li key={car.id + item + i} className={s.desc_item}>
              {item}
            </li>
          ))}
        </ul>
        <ul className={clsx(s.list, s.sublist)}>
          {car.functionalities.map((item, i) => (
            <li key={car.id + item + i} className={s.desc_item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <h4 className={s.subtitle}>Rental Conditions: </h4>
      <ul className={s.rental_list}>
        {rentalConditions.map((cond, i) =>
          cond.includes('Minimum age:') ? (
            <li className={s.rental_item} key={car.id + cond + i}>
              Minimum age :
              <span className={s.accent}> {cond.match(regex)}</span>
            </li>
          ) : (
            <li className={s.rental_item} key={car.id + cond + i}>
              {cond}
            </li>
          )
        )}
        <li className={s.rental_item}>
          Mileage: <span className={s.accent}>{numberFormat(car.mileage)}</span>
        </li>
        <li className={s.rental_item}>
          Price: <span className={s.accent}>{car.rentalPrice.slice(1)}$</span>
        </li>
      </ul>
      <a className={s.link} href="tel:+380730000000">
        Rental car
      </a>
    </div>
  );
};
